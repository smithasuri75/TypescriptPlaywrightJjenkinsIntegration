import { test, expect } from '@playwright/test';

test('Date picker Test', async ({ page }) => {

    await page.goto('https://jqueryui.com/datepicker/');
    await page.waitForTimeout(3000);

    const iframe = page.frameLocator('.demo-frame');

    await iframe.locator('#datepicker').fill('10/06/2024');
    await page.waitForTimeout(3000);

    // select dymanic date
    await iframe.locator('#datepicker').click();
    await iframe.locator('.ui-datepicker-year').click();

    // select the past date
    await iframe.locator('#datepicker').click();
    await iframe.locator('a[title="Prev"]').click();
    await iframe.locator('text="15"').click();


    // select the Future date
    await iframe.locator('#datepicker').click();
    await iframe.locator('a[title="Next"]').click();
    await iframe.locator('text="20"').click();
    await page.waitForTimeout(3000);

});