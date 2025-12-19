import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

// Extend the base test with our custom fixtures
type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  page: async ({ page }, use) => {
    await page.goto("/");
    await use(page);
    await page.close();
  },
});

export { expect } from "@playwright/test";
