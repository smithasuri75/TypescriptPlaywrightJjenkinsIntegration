import { Page } from '@playwright/test';

export class LandingPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get dashboardHeader() {
        return this.page.getByRole('heading', { name: 'Dashboard' });
    }

    get adminMenu() {
        return this.page.getByRole('link', { name: 'Admin' });
    }

    get pimMenu() {
        return this.page.getByRole('link', { name: 'PIM' });
    }

    get leaveMenu() {
        return this.page.getByRole('link', { name: 'Leave' });
    }

    get timeMenu() {
        return this.page.getByRole('link', { name: 'Time' });
    }

    get userDropdown() {
        return this.page.locator('.oxd-userdropdown');
    }

    async clickAdmin() {
        await this.adminMenu.click();
    }

    async clickPIM() {
        await this.pimMenu.click();
    }

    async clickLeave() {
        await this.leaveMenu.click();
    }

    async clickTime() {
        await this.timeMenu.click();
    }

    async logout() {
        await this.userDropdown.click();
        await this.page.getByRole('menuitem', { name: 'Logout' }).click();
    }
}
