class DropdownPage {
  constructor(page) {
    this.page = page;
    this.skillsSelect = page.locator('#Skills');
    this.sltCountry = page.locator('span[role="combobox"]');
    this.txtCountry = page.locator('input[role="textbox"]');
    this.countryResult = page.locator('ul#select2-country-results > li');
  }
}

module.exports = { DropdownPage };
