import {test, expect} from '@playwright/test';


test('Test Mouse actions', async({page})=>{

   await page.goto('https://www.youtube.com/results?search_query=playwright+typescript+automation+framework');
   await page.waitForLoadState('networkidle');
  
  // Use a more generic approach to find any playwright video
  const playlistLink = page.locator('a[href*="watch"]').first();
  await expect(playlistLink).toBeVisible();
  await playlistLink.click();

  await page.waitForTimeout(3000);

  // Try to find voice search button - may not always be visible
  const voiceButton = page.getByRole('button', { name: 'Search with your voice' });
  if (await voiceButton.isVisible()) {
    await voiceButton.hover();
  }
  await page.waitForTimeout(3000);

});