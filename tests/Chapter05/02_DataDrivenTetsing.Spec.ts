import { test, expect } from '@playwright/test'
import testdata from '../../test-data/qa/testdata.json';

type TestData = {
    TestdataSet1: {
        Skill1: string,
        Skill2: string
    },
    TestdataSet2: {
        Skill1: string,
        Skill2: string
    }
}
const typedTestdata = testdata as TestData;

for(const dataSet in typedTestdata){

      const skill =  typedTestdata[dataSet as keyof TestData];

    test(`DataDriven testing using json file values Youtube${skill.Skill1}`, async ({ page }) => {
    await page.goto(`${process.env.YOUTUBE_URL}`);
    await page.getByRole('combobox').click();
    await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.waitForLoadState('networkidle');
    // await page.getByRole('link', { name: skill.Skill1, exact: true }).click();
    // await expect(page).toHaveTitle(skill.Skill1+'☑️ - YouTube');

});
}

