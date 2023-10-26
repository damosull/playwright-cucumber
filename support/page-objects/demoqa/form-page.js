class FormPage {
  constructor(page) {
    this.txtFirstName = page.locator('#firstName');
    this.txtLastName = page.locator('#lastName');
    this.txtEmail = page.locator('#userEmail');
  }
}

module.exports = { FormPage };
