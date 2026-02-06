import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example/);
});

test("another test", async ({ page }) => {
  await page.goto("https://example.com");
  const heading = page.locator("h1");
  await expect(heading).toBeVisible();
});
