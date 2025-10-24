
import { test } from '../../fixture/TestFixture';

test('navigate to admin menu from landing page', async ({ page ,loginPage,landingPage,testData}) => {
      
    console.log(`Skill 1: ${String(testData.ModulelTestData?.Skilll)}`);
    console.log(`Skill 2: ${String(testData.ModulelTestData?.Skill2)}`);
    console.log(`Skill 3: ${String(testData.ModulelTestData?.Skill3)}`);
    await loginPage.goto();
      await loginPage.login('Admin', 'admin123');

});

