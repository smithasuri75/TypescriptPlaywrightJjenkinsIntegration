import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
});
