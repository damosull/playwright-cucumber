class DragAndDropPage {
  constructor(page) {
    this.page = page;
  }

  async getCapital(capital) {
    const capitalLocator = `//div[@id="box3"] [text()="${capital}"]`;
    return this.page.locator(capitalLocator);
  }

  async getCountry(country) {
    const capitalLocator = `//div[@id="box103"] [text()="${country}"]`;
    return this.page.locator(capitalLocator);
  }
}

module.exports = { DragAndDropPage };
