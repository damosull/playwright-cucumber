class HomePage {
  constructor(page) {
    this.btnSignIn = page.locator('a:has-text("Sign in")');
  }

  async navigateToHomePage() {
    await page.goto('https://react-redux.realworld.io');
  }
}

module.exports = { HomePage };
