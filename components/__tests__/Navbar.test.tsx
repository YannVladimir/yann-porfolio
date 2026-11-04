import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Navbar } from "../Navbar";
import { ThemeProvider } from "../ThemeProvider";

function renderNavbar(onOpenContact = vi.fn()) {
  return render(
    <ThemeProvider>
      <Navbar onOpenContact={onOpenContact} />
    </ThemeProvider>
  );
}

describe("Navbar", () => {
  it("renders every primary navigation link pointing at its matching section", () => {
    renderNavbar();

    const expected: Record<string, string> = {
      Work: "#projects",
      About: "#about",
      Experience: "#experience",
      Ecosystem: "#ecosystem",
      Philosophy: "#philosophy",
      Education: "#education",
    };

    for (const [label, href] of Object.entries(expected)) {
      // Each link appears twice: once in the desktop nav, once in the mobile drawer.
      const links = screen.getAllByRole("link", { name: label });
      expect(links.length).toBeGreaterThan(0);
      for (const link of links) {
        expect(link).toHaveAttribute("href", href);
      }
    }
  });

  it("calls onOpenContact when the desktop 'Let's talk' button is clicked", () => {
    const onOpenContact = vi.fn();
    renderNavbar(onOpenContact);

    fireEvent.click(screen.getByRole("button", { name: /let's talk/i }));

    expect(onOpenContact).toHaveBeenCalledTimes(1);
  });

  it("opens the mobile drawer and closes it again via the hamburger toggle", async () => {
    renderNavbar();

    expect(screen.queryByText("Available for projects")).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Open navigation menu"));
    expect(screen.getByText("Available for projects")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Open navigation menu"));
    await waitFor(() =>
      expect(screen.queryByText("Available for projects")).not.toBeInTheDocument()
    );
  });

  it("opens the contact modal and closes the drawer from the mobile 'Get in touch' button", async () => {
    const onOpenContact = vi.fn();
    renderNavbar(onOpenContact);

    fireEvent.click(screen.getByLabelText("Open navigation menu"));
    fireEvent.click(screen.getByRole("button", { name: /get in touch/i }));

    expect(onOpenContact).toHaveBeenCalledTimes(1);
    await waitFor(() =>
      expect(screen.queryByText("Available for projects")).not.toBeInTheDocument()
    );
  });
});
