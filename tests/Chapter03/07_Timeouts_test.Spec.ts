import { test, expect } from '@playwright/test'
import { TIMEOUT } from 'dns';

test('Timeout in Playwright', async ({ page }) => {

    test.setTimeout(2 * 60 * 1000); // 1 min
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click({timeout:  1000}); // 1 sec

    await expect(page).toHaveTitle("OrangeHRM");

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

});                                                       