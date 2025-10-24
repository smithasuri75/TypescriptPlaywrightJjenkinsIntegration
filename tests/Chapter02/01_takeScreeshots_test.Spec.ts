import { test, expect } from '@playwright/test'

test('Capture Screenshots in Playwright', async ({ page }) => {

      await page.goto('https://www.youtube.com/@testerstalk');
      await page.waitForLoadState('networkidle');

        // Screenshot of a specific element screenshot
        await expect(page.locator("#page-header-container")).toBeVisible();
        await page.locator("#page-header-container").screenshot({path:'./tests/Screenshots/ElementScreenhot.png'});
         
        // page screenshot
        await page.screenshot({path:'./tests/Screenshots/PageScreenhot.png'});

        // Full page screenshot
        await page.screenshot({path:'./tests/Screenshots/FullPageScreenhot.png', fullPage:true});

});                                                       