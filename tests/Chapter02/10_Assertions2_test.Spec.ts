import {test,expect} from '@playwright/test';

test('Playwright Assertions 2', async({page})=>{


        await page.goto('https://www.youtube.com/@testerstalk');
        await expect(page).toHaveTitle("Testers Talk - YouTube");
        
        
        const utltext = page.getByText('Playwright by Testers Talk ✅')

        await expect(utltext).toHaveText('Playwright by Testers Talk ✅');

        


});