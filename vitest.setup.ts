import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement matchMedia or scrollTo, and framer-motion /
// the theme toggle rely on them existing in the browser.
if (typeof window !== "undefined") {
  if (!window.matchMedia) {
    window.matchMedia = (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList;
  }

  if (!window.scrollTo) {
    window.scrollTo = () => {};
  }
}
