// Import playwright module
import { test, expect } from '@playwright/test';


test('Handling Alert popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Alert message is : ${dialog.message()}`);
        console.log(`Dialog type is : ${dialog.type()}`);
    })

    await page.getByText('See an example alert', { exact: true }).click();
});


test('Handling Confirm  popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.dismiss();
        console.log(`Alert message is : ${dialog.message()}`);
        console.log(`Dialog type is : ${dialog.type()}`);
    })
    await page.getByText('See a sample confirm', { exact: true }).click();
});


test('Handling prompt  popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {
        console.log(`Alert message is : ${dialog.message()}`);
        dialog.accept();
        console.log(`Dialog type is : ${dialog.type()}`);
    })
    await page.getByText('See a sample prompt', { exact: true }).click();
});