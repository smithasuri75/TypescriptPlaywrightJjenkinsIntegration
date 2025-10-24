import { test, expect } from '@playwright/test'


test('Timeout in Playwright', async ({ page }) => {
expect(true).toBe(true);

});          

test('Timeout in Playwright 2' , async ({ page }) => {

   expect(true).toBe(false);

});  

test('Timeout in Playwright 3' , async ({ page }) => {

expect(true).toBe(true);
});  


test('Timeout in Playwright 4' , async ({ page }) => {

expect(true).toBe(true);
});  