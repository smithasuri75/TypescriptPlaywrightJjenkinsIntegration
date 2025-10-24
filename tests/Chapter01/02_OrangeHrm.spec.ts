import { test, expect } from '@playwright/test'

test('Orange Hrm login', async ({ page }) => {

    await test.step('Naviagete to Url', async () => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   });

   await test.step('Enter Username and password', async () => {
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
      await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
      await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
   })

   await test.step('Click on Login button', async () => {
      await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForLoadState('networkidle');
   })

   await test.step('Validate the dashboard', async () => {
      await page.waitForURL('**/dashboard/index');
      await expect(page).toHaveTitle("OrangeHRM");
      await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
   })


});                                                       