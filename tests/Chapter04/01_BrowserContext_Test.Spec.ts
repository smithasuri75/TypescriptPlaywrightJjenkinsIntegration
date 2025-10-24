import { test, expect } from '@playwright/test'


test('Multiple Browser/tabs context in Playwright', async ({ page,browser }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click(); // 1 sec
    await expect(page).toHaveTitle("OrangeHRM");
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

// New Browser Context
   const context2 =  await browser.newContext(); 
   
   const page2 = await context2.newPage(); // New Tab
   await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page2.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page2.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page2.getByRole('button', { name: 'Login' }).click(); // 1 sec
    await expect(page2).toHaveTitle("OrangeHRM");
    await expect(page2).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");


    // Create new tabs
     const newTab = await context2.newPage(); // New Tab
     await newTab.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     await newTab.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await newTab.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await newTab.getByRole('button', { name: 'Login' }).click(); // 1 sec
    await expect(newTab).toHaveTitle("OrangeHRM");


});                                                       