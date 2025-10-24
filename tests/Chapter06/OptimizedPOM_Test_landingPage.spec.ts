// import { test } from '@playwright/test';
// import { LoginPage } from '../../src/pages/LoginPage';
// import { LandingPage } from '../../src/pages/LandingPage';
import { test } from '../../fixture/TestFixture';

test('navigate to admin menu from landing page', async ({ page ,loginPage,landingPage}) => {
  // const loginPage = new LoginPage(page);
  // const landingPage = new LandingPage(page);
  

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await landingPage.clickAdmin();
});

test('navigate to PIM menu from landing page', async ({ page,loginPage,landingPage }) => {
  // const loginPage = new LoginPage(page);
  // const landingPage = new LandingPage(page);
  
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await landingPage.clickPIM();
  await landingPage.logout();
});
