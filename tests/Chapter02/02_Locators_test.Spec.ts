import { test, expect } from '@playwright/test';

test('Locators in Palywright', async ({ page }) => {
    //await page.goto('https://github.com/bakkappaN');

    // // get By role
    // await page.getByRole('link', { name: 'Sign in' }).click();

    // // get  By Label
    // await page.getByLabel('Homepage', { exact: true }).first().click();

    // // Get by Alt text
    //await page.getByAltText("View BakkappaN's full-sized avatar").click();

    // //Get by TestId
    //await page.getByTestId("projects").first().click();

    // //Get By Text
    //await page.getByText('Sign up').first().click();

    // get by placeholder, Xpath, CSS
      await page.goto('https://www.youtube.com/@testerstalk');
      //await page.getByPlaceholder('Search').first().fill('testers talk');
      //await page.locator("//input[@name='search_query']").first().fill('testers talk');
      await page.locator('input[name="search_query"]').first().fill('testers talk');
      


});