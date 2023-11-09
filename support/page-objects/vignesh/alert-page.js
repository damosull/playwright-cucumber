class AlertPage {
  constructor(page) {
    this.btnJSAlert = page.locator('button[onclick="jsAlert()"]');
    this.btnJSPrompt = page.locator('button[onclick="jsPrompt()"]');
    this.btnJSConfirm = page.locator('button[onclick="jsConfirm()"]');
    this.lblResult = page.locator('#result');
  }
}

module.exports = { AlertPage };
