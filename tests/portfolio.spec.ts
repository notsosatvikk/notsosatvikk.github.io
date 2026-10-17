import { expect, test } from "@playwright/test";

test("renders the core story and working navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("I find the signal");
  await page.locator("#home").scrollIntoViewIfNeeded();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page.locator("#projects")).toBeInViewport();
  await page.getByRole("link", { name: "Connect" }).click();
  await expect(page.getByRole("heading", { name: /build the.*next move/i })).toBeVisible();
});

test("project tabs support arrow keys", async ({ page }) => {
  await page.goto("/#projects");
  const firstTab = page.getByRole("tab", { name: /Incite/ });
  await firstTab.focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tab", { name: /People-First/ })).toHaveAttribute("aria-selected", "true");
  const activePanel = page.getByRole("tabpanel");
  await expect(activePanel).toContainText("projected engagement lift");
  await expect(activePanel.locator("img")).toHaveAttribute("src", /people-first/);
  await expect(page.locator(".project-panel[hidden]:visible")).toHaveCount(0);
});

test("every project tab swaps both its story and its artifact", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#projects");

  const cases = [
    { tab: /Incite/, text: "85%", image: /incite-ui/ },
    { tab: /People-First/, text: "projected engagement lift", image: /people-first/ },
    { tab: /Streaming Analytics/, text: "one million records", image: /streaming-dashboard/ },
    { tab: /Emotion AI/, text: "CNN + LSTM", image: /emotion-ai/ }
  ];

  for (const project of cases) {
    await page.getByRole("tab", { name: project.tab }).click();
    const panel = page.getByRole("tabpanel");
    await expect(panel).toContainText(project.text);
    await expect(panel.locator("img")).toHaveAttribute("src", project.image);
  }
});

test("mobile menu closes with Escape and returns focus", async ({ page }) => {
  test.skip((page.viewportSize()?.width ?? 1024) > 767, "Mobile-only behavior");
  await page.goto("/#home");
  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  await menuButton.click();
  await expect(page.getByRole("dialog", { name: "Navigation menu" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Navigation menu" })).toBeHidden();
  await expect(menuButton).toBeFocused();
});

test("resume, email, phone and social URLs are real", async ({ page }) => {
  await page.goto("/#connect");
  await expect(page.getByRole("link", { name: /Download resume/ })).toHaveAttribute("href", "/SatvikGupta_Resume.pdf");
  await expect(page.getByRole("link", { name: /satvikgu@usc.edu/ })).toHaveAttribute("href", "mailto:satvikgu@usc.edu");
  await expect(page.getByRole("link", { name: /\+1 \(213\) 354-2406/ })).toHaveAttribute("href", "tel:+12133542406");
  await expect(page.getByRole("link", { name: /satvikgupta07/ })).toHaveAttribute("rel", /noopener/);
});

test("reduced motion keeps content readable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("#journey")).toContainText("GoElite");
  await expect(page.locator("#projects")).toContainText("Incite");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("320px layout does not create horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});
