import { test, expect } from '@playwright/test';

test('Loops ', async ({ page }) => {
    await page.goto('https://github.com/bakkappaN');

    const repoNames = await page.$$('.repo');

    for (const repoNametext of repoNames) {
        const text = await repoNametext.textContent();
        console.log("repo name is : " + text?.trim());
    }

    console.log("********************");

    for (let i = 0; i < repoNames.length; i++) {
        const text = await repoNames[i].textContent();
        console.log("repo name using for loop is : " + text?.trim());
    }
    console.log("********************");


    const repolinks = await page.locator('.repo');
    const count = await repolinks.count();

    for (let i = 0; i < count; i++) {

        const text = await repolinks.nth(i).textContent();
        console.log("repo name using for loop and locator is : " + text?.trim());
    }

});
