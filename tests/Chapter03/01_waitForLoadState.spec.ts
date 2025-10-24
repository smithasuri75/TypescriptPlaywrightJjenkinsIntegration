import { expect, test } from '@playwright/test';

test('navigate to freelance login page', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  await page.getByRole('link', { name: 'New user? Signup' }).click();

  await page.waitForLoadState(  'networkidle' );

  const checkboxCount = await page.locator('label[class="interest"]').count();
  console.log('Number of checkboxes:', checkboxCount);
  await expect(checkboxCount).toBe(7);

});