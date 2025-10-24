import { test, expect } from '@playwright/test'

test('Orange Hrm login', async ({ page }) => {

    await test.step('Naviagete to Url', async () => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   });

   await test.step('Enter Username and password', async () => {
      await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
      await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
   })

   await test.step('Click on Login button', async () => {
      await page.getByRole('button', { name: 'Login' }).click();
   })

   await test.step('Validate the dashboard', async () => {
      await expect(page).toHaveTitle("OrangeHRMZ");
      await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

   })


});                                                       