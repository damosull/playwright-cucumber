class CheckboxPage {
  constructor(page) {
    this.chk1 = page.locator('#checkbox1');
    this.chk2 = page.locator('#checkbox2');
    this.chk3 = page.locator('#checkbox3');
  }
}

module.exports = { CheckboxPage };
