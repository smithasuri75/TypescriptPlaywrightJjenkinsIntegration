import { test, expect } from '@playwright/test'


test.describe('SmokeTesting', () => {
    test('Test1', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

});

test.describe('RegressionTesting', () => {
    test('Test2', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    });

    test('Test3', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    test('Test4', async ({ page }) => {

    expect(true).toBe(false);
}); 
});



