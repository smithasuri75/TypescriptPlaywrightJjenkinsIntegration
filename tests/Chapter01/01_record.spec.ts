import { test, expect } from '@playwright/test';
import { url } from 'inspector';

test('test', async ({ page }) => {
  await test.step('Navigating to url', async () => {
      await page.goto('https://github.com/');
      await page.getByRole('link', { name: 'Sign in' }).click();
  });

    await test.step('Enter Username and password', async () => {
      await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('testersTalk');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  });

    await test.step('Click on signin', async () => {
      await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });

  await test.step('Validate Error message', async () => {
      await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });




});
