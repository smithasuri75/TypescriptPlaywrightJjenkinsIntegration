import {test, expect} from '@playwright/test';
import { before } from 'node:test';


test.beforeEach(async({page})=>{
    await page.goto('https://www.facebook.com/');
})
test('Dropdown Test', async ({page}) => {
    await page.getByText('Create new account').click();
    await page.waitForTimeout(3000);

    // Select dropdown using value 
    await page.getByLabel('Month').selectOption('6');

    // Select dropdown using visible text |
    await page.getByLabel('Month').selectOption('Aug');

    // Select dropdown using index
    await page.getByLabel('Month').selectOption({index:10});

    const expectedMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const monthOptions = await page.locator('#month>option').allTextContents();
    console.log(monthOptions);
    await expect(monthOptions).toEqual(expectedMonths);
    

});