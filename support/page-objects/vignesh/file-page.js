class FilePage {
  constructor(page) {
    this.page = page;
    this.txt = page.locator('#textbox');
    this.btnCreateFile = page.locator('#createTxt');
    this.downloadLink = page.locator('#link-to-download');
  }
}

module.exports = { FilePage };
