import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { LandingPage } from '../src/pages/LandingPage';
import {loadTestData} from '../utils/JsonHelper'; 
import { TestData } from '../src/interface/Module1Testdata.interface';
import { ExcelHelper } from '../utils/ExcelHelper';

export const test = base.extend<{
    saveLogs: void;
    loginPage: LoginPage;
    landingPage: LandingPage;
    testData: TestData;

}>({
    saveLogs: [async ({ }, use) => {
        console.log('Global before is running...');
        await use();
        console.log('Global afterEach is running...');
    },

    { auto: true }],

    loginPage: async ({ page }: { page: Page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    landingPage: async ({ page }: { page: Page }, use) => {
        const landingPage = new LandingPage(page);
        await use(landingPage);
    },
        testData: async ({ }, use) => {
        const data = await loadTestData();
        await use(data);
    }
});
export { expect } from '@playwright/test';