class DashboardPage {
  constructor(page) {
    this.btnSettings = page.locator('a[href="#settings"]');
    this.btnLogOut = page.locator(
      'button:has-text("Or click here to logout.")'
    );
  }
}

module.exports = { DashboardPage };
