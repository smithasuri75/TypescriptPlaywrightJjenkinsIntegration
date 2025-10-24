import {test, expect} from '@playwright/test';


test('Assertions in playwright', async({page})=>{

   await page.goto('https://www.youtube.com/');
  

  const searchElement =  page.getByRole('combobox', { name: 'Search' })
        
    await expect(searchElement).toBeVisible();
    await expect(searchElement).toBeEditable();
    await expect(searchElement).toBeEmpty();
    await expect(searchElement).toBeEnabled();

});


