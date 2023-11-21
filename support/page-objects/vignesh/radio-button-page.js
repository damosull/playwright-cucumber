class RdoBtnPage {
  constructor(page) {
    this.page = page;
    this.rdoMale = page.locator('input[value="Male"]');
    this.rdoFemale = page.locator('input[value="FeMale"]');
  }
}

module.exports = { RdoBtnPage };
