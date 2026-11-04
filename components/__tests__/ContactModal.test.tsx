import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactModal } from "../ContactModal";
import { PERSONAL_INFO } from "@/data/portfolioData";

function fillOutForm(name: string, email: string, message: string) {
  fireEvent.change(screen.getByPlaceholderText("e.g. John Doe"), {
    target: { value: name },
  });
  fireEvent.change(screen.getByPlaceholderText("name@company.com"), {
    target: { value: email },
  });
  fireEvent.change(
    screen.getByPlaceholderText("Describe your project, timeline, or inquiry..."),
    { target: { value: message } }
  );
}

describe("ContactModal", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders nothing when closed", () => {
    const { container } = render(<ContactModal isOpen={false} onClose={vi.fn()} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the form with the required fields when open", () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />);
    expect(screen.getByPlaceholderText("e.g. John Doe")).toBeRequired();
    expect(screen.getByPlaceholderText("name@company.com")).toBeRequired();
    expect(
      screen.getByPlaceholderText("Describe your project, timeline, or inquiry...")
    ).toBeRequired();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("submits via FormSubmit and shows the success screen on success", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactModal isOpen={true} onClose={vi.fn()} />);
    fillOutForm("Jane Doe", "jane@example.com", "Let's work together.");

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    );

    expect(fetchMock).toHaveBeenCalledWith(
      `https://formsubmit.co/ajax/${PERSONAL_INFO.email}`,
      expect.objectContaining({ method: "POST" })
    );
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.Name).toBe("Jane Doe");
    expect(body.Email).toBe("jane@example.com");
    expect(body.Message).toBe("Let's work together.");
  });

  it("falls back to a mailto link and logs the error when the request fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network down")));
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    // jsdom's window.location.href is non-configurable, and TypeScript's DOM
    // lib won't let us assign a plain object to `window.location` directly,
    // so replace the whole `location` property on `window` via
    // defineProperty (which is configurable) to observe the mailto fallback
    // without actually navigating.
    const originalLocationDescriptor = Object.getOwnPropertyDescriptor(window, "location");
    let assignedHref = "";
    Object.defineProperty(window, "location", {
      configurable: true,
      value: {
        get href() {
          return assignedHref;
        },
        set href(value: string) {
          assignedHref = value;
        },
      },
    });

    render(<ContactModal isOpen={true} onClose={vi.fn()} />);
    fillOutForm("Jane Doe", "jane@example.com", "Let's work together.");

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    );

    expect(assignedHref).toContain("mailto:");
    expect(assignedHref).toContain(encodeURIComponent("Jane Doe"));
    expect(consoleErrorSpy).toHaveBeenCalled();

    if (originalLocationDescriptor) {
      Object.defineProperty(window, "location", originalLocationDescriptor);
    }
  });

  it("does not show a stale success screen after being closed and reopened (regression)", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));

    const handleClose = vi.fn();
    const { rerender } = render(<ContactModal isOpen={true} onClose={handleClose} />);

    fillOutForm("Jane Doe", "jane@example.com", "Let's work together.");
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() =>
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    );

    // Close via the header "X" button, not the success screen's own "Close"
    // button — this is the path that used to leave formSubmitted/formData
    // stuck in state because the component never unmounts.
    fireEvent.click(screen.getByLabelText("Close contact form"));

    // Simulate the parent re-rendering with isOpen=false then true again.
    rerender(<ContactModal isOpen={false} onClose={handleClose} />);
    rerender(<ContactModal isOpen={true} onClose={handleClose} />);

    expect(screen.queryByText(/message sent successfully/i)).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText("e.g. John Doe")).toHaveValue("");
  });
});
