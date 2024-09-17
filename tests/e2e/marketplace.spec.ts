// tests/e2e/marketplace.spec.ts
import { test, expect } from '@playwright/test';

test('navigates to the character list and displays characters', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Navigate to the character list
  await page.getByRole('button', { name: 'Click here to see the list' }).click();

  // Wait for navigation by checking the URL or a unique element on the character list page
  await page.waitForURL('**/characters');

  // Verify that at least one character card is present
  const cardLocator = page.locator('.card-grid > div');
  await expect(cardLocator.first()).toBeVisible({ timeout: 10000 });
});
