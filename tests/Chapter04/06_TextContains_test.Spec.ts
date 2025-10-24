import { test, expect } from '@playwright/test';

test('Get Text and Get attribute', async ({ page }) => {
    await page.goto('https://github.com/bakkappaN');

    // get By role
    const name = await page.locator('[itemprop="name"]').textContent();
    const finalname = name?.trim();
    console.log("name is : " + finalname);

});

test('Get InnerText', async ({ page }) => {
    await page.goto('https://github.com/bakkappaN');

    // get By role
    const name = await page.locator('[itemprop="name"]').innerText();
    const finalname = name?.trim();
    console.log("name is : " + finalname);
    expect(finalname).toBe("Testers Talk");

});

test('Get Attribute', async ({ page }) => {
    await page.goto('https://github.com/bakkappaN');

    const attributename = await page.getByTestId('repositories').first().getAttribute('data-selected-links')
     console.log("Attributename is : " + attributename);

});