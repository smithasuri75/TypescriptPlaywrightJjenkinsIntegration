import {test, expect} from '@playwright/test';

test('Keyboard actions',async({page})=>{
        //await  page.goto("https://www.youtube.com/")

        // await page.getByRole('combobox', { name: 'Search' }).fill('naveen automation labs')
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(3000);


        // await page.getByRole('combobox', { name: 'Search' }).click();
        // await page.keyboard.press('Control+A');
        // await page.keyboard.press('Delete');

        // Press TAB and ENTER
         await  page.goto("https://github.com/login")

         await page.getByRole('textbox', { name: 'Username or email address' }).fill('naveenautomationlabs');
        await page.keyboard.press('Tab');
        await page.getByRole('textbox', { name: 'Password' }).fill('test@1234')
        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'Sign in', exact: true }).press('Enter');

            

    })