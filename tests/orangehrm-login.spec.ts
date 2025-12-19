import { test, expect } from '../fixtures/fixtures';

test.describe('Orange HRM Login', () => {
  test('should login with valid credentials', async ({ loginPage, page }) => {
    await loginPage.login('Admin', 'admin123');
    // Add an assertion for successful login, e.g., check for dashboard element
    await expect(page).toHaveURL(/dashboard/);
  });

  test('should show error with invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalid', 'invalid');
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
