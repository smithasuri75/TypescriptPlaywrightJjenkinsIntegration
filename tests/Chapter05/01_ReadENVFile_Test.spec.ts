// Import Playwright test module
import { test, expect } from '@playwright/test';

/**
 * Author: Testers Talk
 */
test('Read ENV file config in Playwright', async ({ page }) => {
  // Go to URL from environment variable
  await page.goto(`${process.env.YOUTUBE_URL}`);

  // Optional: verify page loaded
  await expect(page).toHaveTitle(/YouTube/i);
});
