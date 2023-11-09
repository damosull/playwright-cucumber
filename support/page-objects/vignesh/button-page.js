class ButtonPage {
  constructor(page) {
    this.area = page.locator('#click_area');
    this.lblClickType = page.locator('#click_type');
  }
}

module.exports = { ButtonPage };
