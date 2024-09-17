// tests/e2e/app.spec.ts
import { test, expect } from '@playwright/test';

test('the homepage loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Verify that the homepage title is visible
  await expect(page.getByRole('heading', { name: 'Futurama Characters' })).toBeVisible();

  // Verify that the navigation button is visible
  await expect(page.getByRole('button', { name: 'Click here to see the list' })).toBeVisible();
});
