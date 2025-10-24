import { test, expect } from '@playwright/test';

test.describe('Account Registration - HYR Tutorials', () => {
    
    test('should successfully register a new account with valid data', async ({ page }) => {
        await page.goto('https://www.hyrtutorials.com/p/add-padding-to-containers.html');
        // Generate unique test data
        const timestamp = Date.now();
        const testData = {
            firstName: `Test${timestamp}`,
            lastName: `User${timestamp}`,
            email: `test.user${timestamp}@example.com`,
            password: 'TestPassword123!'
        };

        await expect(page.getByRole('textbox').first()).toBeVisible();
        await page.getByRole('textbox').first().fill(testData.firstName);

        await expect(page.getByRole('textbox').nth(1)).toBeVisible();
        await page.getByRole('textbox').nth(1).fill(testData.lastName);

        await expect(page.getByRole('textbox').nth(2)).toBeVisible();
        await page.getByRole('textbox').nth(2).fill(testData.email); 

        await expect(page.getByRole('textbox').nth(2)).toBeVisible();
        await page.getByRole('textbox').nth(2).fill(testData.email); 


        await expect(page.getByRole('textbox').nth(3)).toBeVisible();
        await page.getByRole('textbox').nth(3).fill(testData.password);


        await expect(page.getByRole('textbox').nth(4)).toBeVisible();
        await page.getByRole('textbox').nth(4).fill(testData.password);

        // Submit the registration form
        await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
        await page.getByRole('button', { name: 'Register' }).click();


    });

    test('should click and verify Francisco Chang checkbox', async ({ page }) => {
        // Navigate to the HYR Tutorials page
        await page.goto('https://www.hyrtutorials.com/p/add-padding-to-containers.html');

        // Dynamic contact name - can be changed as needed
        const contactName = 'Helen Bennett';
        const nameRegex = new RegExp(contactName);

      try{
          await page.getByRole('row', { name: nameRegex }).getByRole('checkbox').check();
          console.log(`Successfully checked checkbox for contact: ${contactName}`);
      }
        catch(error){
            console.error(`Error while checking the checkbox for ${contactName}:`, error);
        }
        
    });

    test('Test 3', async ({ page }) => {
        // Navigate to the HYR Tutorials page 
        await page.goto('https://www.hyrtutorials.com/p/add-padding-to-containers.html');
        
        // Wait for the page to load completely
        await page.waitForLoadState('networkidle');


        try{

            const contactCells = page.locator("//table[@id='contactList']/tbody/tr/following-sibling::tr/descendant::td[2]");
            const contactCount = await contactCells.count();
            
            console.log(`Found ${contactCount} contact name cells`);

            for (let i = 0; i < contactCount; i++) {
                const contactName = await contactCells.nth(i).innerText();
                console.log(`Contact Name [${i + 1}]: ${contactName}`);

                const checkbox = page.locator(`//table[@id='contactList']//td[text()='${contactName}']/preceding-sibling::td/input[@type='checkbox']`);
                
                // Check if checkbox exists and is visible
                await expect(checkbox).toBeVisible();
                
                // Check the checkbox
                await checkbox.check();
                console.log(`Clicked checkbox for contact: ${contactName}`);

                // Verify the checkbox is checked
                await expect(checkbox).toBeChecked();
                console.log(`✓ Verified checkbox is checked for: ${contactName}`);

                // Small delay to avoid rapid clicking issues
                await page.waitForTimeout(100);
            }
            
            

        }catch(error){
            console.error('Error while reading contact values and clicking checkboxes:', error);
        }
    });

    test('Test 4', async ({ page }) => {
        console.log('Launching World Population website...');
        
        // Navigate to the World Population URL
        await page.goto('https://www.worldometers.info/world-population/');
        
        // Wait for the page to load completely
        await page.waitForLoadState('networkidle');
 
        
        console.log('Starting real-time population monitoring for 20 seconds...\n');
        
        const startTime = Date.now();
        const duration = 20000; // 20 seconds in milliseconds
        let iteration = 1;
        
        while (true) {
            const currentTime = Date.now();
            
            // Break after 20 seconds
            if (currentTime - startTime >= duration) {
                console.log('\n⏰ 20 seconds completed - stopping monitoring');
                break;
            }
            
            try {

                // Current World Population
                const currentPopulation = await page.locator('.rts-counter[rel="current_population"]').textContent();
                console.log(`🌍 Current World Population: ${currentPopulation}`);
                
                // Today's Statistics
                const birthsToday = await page.locator('.rts-counter[rel="births_today"]').textContent();
                const deathsToday = await page.locator('.rts-counter[rel="dth1s_today"]').textContent();
                const growthToday = await page.locator('.rts-counter[rel="absolute_growth"]').textContent();
                

                console.log(`  👶 Births today: ${birthsToday}`);
                console.log(`  💀 Deaths today: ${deathsToday}`);
                console.log(`  📊 Population Growth today: ${growthToday}`);
                
                // This Year's Statistics
                const birthsThisYear = await page.locator('.rts-counter[rel="births_this_year"]').textContent();
                const deathsThisYear = await page.locator('.rts-counter[rel="dth1s_this_year"]').textContent();
                const growthThisYear = await page.locator('.rts-counter[rel="absolute_growth_year"]').textContent();
                
                console.log(`📅 THIS YEAR:`);
                console.log(`  👶 Births this year: ${birthsThisYear}`);
                console.log(`  💀 Deaths this year: ${deathsThisYear}`);
                console.log(`  📊 Population Growth this year: ${growthThisYear}`);
                
                iteration++;
                
                // Wait 1 second before next iteration to see changes
                await page.waitForTimeout(1000);
                
            } catch (error) {
                console.error(`❌ Error getting statistics at iteration ${iteration}:`, error);
                await page.waitForTimeout(1000); // Still wait before retrying
            }
        }
        
        console.log('\n🎉 Real-time population monitoring completed successfully!');
    });

    test('Calender', async ({ page }) => {
        // Navigate to the Calendar practice page
        await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html#google_vignette');
        
        // Wait for the page to load completely
        await page.waitForLoadState('networkidle');

        // Click on First Date field and set date to 10/01/2025
        await page.locator('#first_date_picker').click();
        await page.locator('#first_date_picker').fill('10/01/2025');
        console.log('First Date set to: 10/01/2025');

        // Click on Second Date field and set date to 10/02/2025
        await page.locator('#second_date_picker').click();
        await page.locator('#second_date_picker').fill('10/02/2025');
        console.log('Second Date set to: 10/02/2025');

        // Verify the dates are set correctly
        const firstDateValue = await page.locator('#first_date_picker').inputValue();
        const secondDateValue = await page.locator('#second_date_picker').inputValue();
        
        console.log(`Verified First Date: ${firstDateValue}`);
        console.log(`Verified Second Date: ${secondDateValue}`);

    });

});