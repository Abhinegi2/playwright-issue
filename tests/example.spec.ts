import { test, expect } from "@playwright/test";
// Import using .js extension but pointing to .ts file (ESM requirement)
import { createTestData } from "../e2e/fixtures.js";

test("example test", async ({ page }) => {
  const testData = createTestData();
  expect(testData.entity1.name).toBe("Test Entity 1");
  
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example/);
});

test("another test", async ({ page }) => {
  const testData = createTestData();
  expect(testData.entity2.name).toBe("Test Entity 2");
  
  await page.goto("https://example.com");
  const heading = page.locator("h1");
  await expect(heading).toBeVisible();
});
