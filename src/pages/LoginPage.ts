import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Element locators
    get usernameInput() {
        return this.page.getByPlaceholder('Username');
    }

    get passwordInput() {
        return this.page.getByPlaceholder('Password');
    }

    get loginButton() {
        return this.page.getByRole('button', { name: 'Login' });
    }

    // Methods
    async goto() {
        if (process.env.TEST_EXECUTION_ENV == 'qa') {
           await this.page.goto(`${process.env.ORANGEHRM_URL}`);
            console.log(`Tests are running in ************************* ${process.env.TEST_EXECUTION_ENV} env.`)
        } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
           await this.page.goto(`${process.env.ORANGEHRM_URL}`);
            console.log(`Tests are running in ************************* ${process.env.TEST_EXECUTION_ENV} env.`)
        }
    }

    async fillUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }
}