import test, { expect } from '@playwright/test';
import { USERS } from './data/login';

test.beforeEach('Go to login', async ({ page }) => {
  await page.goto('/login');
});

test('Login sucessful', async ({ page }) => {
  await page
    .getByRole('textbox', { name: 'Type your username' })
    .fill(USERS.valid.username);

  await page
    .getByRole('textbox', { name: 'Type your password' })
    .fill('password123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('User successfully logge')).toHaveText(
    USERS.valid.expectedMessage
  );
});

test('Login sucessful 11', async ({ page }) => {
  await page
    .getByRole('textbox', { name: 'Type your username' })
    .fill(USERS.valid.username);

  await page
    .getByRole('textbox', { name: 'Type your password' })
    .fill(USERS.valid.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('User successfully logged in!')).toBeVisible();
});
