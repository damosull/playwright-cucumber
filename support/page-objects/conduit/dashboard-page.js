class DashboardPage {
  constructor(page) {
    this.btnSettings = page.locator('a[href="#settings"]');
    this.btnLogOut = page.locator(
      'button:has-text("Or click here to logout.")'
    );
    this.btnNewPost = page.locator('a[href="#editor"]');
  }
}

module.exports = { DashboardPage };
