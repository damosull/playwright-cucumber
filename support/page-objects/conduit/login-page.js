class LoginPage {
  constructor(page) {
    this.txtEmail = page.locator('input[type="email"]');
    this.txtPassword = page.locator('input[type="password"]');
    this.btnSignIn = page.locator('button:has-text("Sign in")');
  }

  async navigateToHomePage() {
    await page.goto('https://react-redux.realworld.io');
  }
}

module.exports = { LoginPage };
