// Import playwright module
import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Working with checkbox & radion buttons in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://jqueryui.com/checkboxradio/');

    const iframe = page.frameLocator('[class="demo-frame"]');

    // Validate radio button or checkbox unchecked

    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked;
    await iframe.locator('[for="radio-1"]').check();
    await expect(iframe.locator('[for="radio-1"]')).toBeChecked;

});