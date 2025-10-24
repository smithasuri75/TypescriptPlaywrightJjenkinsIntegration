import { test, expect } from '@playwright/test';

test('Visual testing', async ({ page }) => {
    
    await page.goto('https://github.com/login');
    await expect(page).toHaveScreenshot("GithubLoginPage.png");

    await page.locator('#login_field').fill('testerstalk');
     await expect(page).toHaveScreenshot("GithubLoginPage.png");

});



test('Element Visual testing', async ({ page }) => {
    
    await page.goto('https://github.com/login');
    await expect(page).toHaveScreenshot("GithubLoginPage.png");

    await page.locator('#login_field').fill('testerstalk');
     await expect(page).toHaveScreenshot("GithubLoginPage.png");

});