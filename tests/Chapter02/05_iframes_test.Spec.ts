import {test, expect} from '@playwright/test';

test('Iframes Test', async({page})=>{

    // Use jQuery UI droppable instead of demoqa which seems to have loading issues
    await page.goto('https://jqueryui.com/droppable/', { timeout: 60000 });
    await page.waitForLoadState('networkidle');

    const IframeEle = page.frameLocator('.demo-frame');
   
    // drag element
    const dragElement =  IframeEle.locator('div[id="draggable"]');
    const dropElement =  IframeEle.locator('div[id="droppable"]');

    await expect(dragElement).toBeVisible();
    await expect(dropElement).toBeVisible();

    await dragElement.dragTo(dropElement);
    await page.waitForTimeout(3000);

    // Verify drop was successful
    await expect(dropElement).toContainText('Dropped!');

});


