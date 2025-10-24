import { test, expect } from '@playwright/test'

const searchKeywords = ['playwright by testers talk', 'selenium by testers talk', 'Api testing by testers talk'];

for (const keyword of searchKeywords) {
    test(`Prameterized Youtube - ${keyword}`, async ({ page }) => {

  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox').click();
  await page.getByRole('combobox', { name: 'Search' }).fill(keyword);

});                                                       
}

