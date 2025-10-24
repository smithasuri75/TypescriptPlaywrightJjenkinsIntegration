import { test, expect } from '@playwright/test';


test('Soft Assertions in playwright', async ({ page }) => {

    await page.goto('https://www.youtube.com/@testerstalk');
    await expect.soft(page).toHaveTitle("Testers Talk - YouTube");

    const utltext = page.getByText('Playwright by Testers Talk ✅')
    await expect.soft(utltext).toHaveText('Playwright by Testers Talk ✅');

});


