import { test, expect } from '@playwright/test';

test('Code Gen testcase', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox').click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');

});