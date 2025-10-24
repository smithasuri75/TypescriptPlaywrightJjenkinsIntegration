import { test, expect } from '@playwright/test'

// Disable parallel execution for this file to avoid login conflicts
test.describe.configure({ mode: 'serial' });

test.beforeAll(async() =>{
    console.log("Running before all tests");
});

test.afterAll(async() =>{
    console.log("After before all tests");
});
test.beforeEach(async({page}) =>{
   console.log("Before Each test");
       await test.step('Naviagete to Url', async () => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.waitForLoadState('networkidle');
   });

});

test.afterEach(async() =>{
    console.log("After Each test");
});

test('Test1', async ({ page }) => {
   console.log("Running Test1");

   await test.step('Enter Username and password', async () => {
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
      await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
      await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
   })

   await test.step('Click on Login button', async () => {
      await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
      await page.getByRole('button', { name: 'Login' }).click({ force: true, timeout: 30000 });
      // Remove networkidle wait which can be problematic
   })

   await test.step('Validate the dashboard', async () => {
      await page.waitForURL('**/dashboard/index', { timeout: 30000 });
      await expect(page).toHaveTitle("OrangeHRM");
      await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

   })


});    


test('Test2', async ({ page }) => {
    console.log("Running Test2");


   await test.step('Enter Username and password', async () => {
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
      await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
      await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
   })

   await test.step('Click on Login button', async () => {
      await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
      await page.getByRole('button', { name: 'Login' }).click({ force: true, timeout: 30000 });
      // Remove networkidle wait which can be problematic
   })

   await test.step('Validate the dashboard', async () => {
      await page.waitForURL('**/dashboard/index', { timeout: 30000 });
      await expect(page).toHaveTitle("OrangeHRM");
      await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

   })


});                                                       