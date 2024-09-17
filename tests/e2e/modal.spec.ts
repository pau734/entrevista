// tests/e2e/modal.spec.ts
import { test, expect } from '@playwright/test';

test('opens and closes the character modal', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Navigate to the character list
  await page.getByRole('button', { name: 'Click here to see the list' }).click();

  // Click on the first card to open the modal
  const firstCard = page.locator('.card-grid > div').first();
  await firstCard.click();

  // Verify that the modal is visible
  await expect(page.locator('.MuiDialog-root')).toBeVisible();

  // Verify that the modal close button is visible
  const closeButton = page.getByRole('button', { name: 'Close' });
  await expect(closeButton).toBeVisible();

  // Click the close button on the modal
  await closeButton.click();

  // Verify that the modal is closed
  await expect(page.locator('.MuiDialog-root')).not.toBeVisible();
});
