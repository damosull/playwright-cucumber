class FormPage {
  constructor(page) {
    this.txtTitle = page.locator('input[placeholder="Article Title"]');
    this.txtDescription = page.locator(
      'input[placeholder="What\'s this article about?"]'
    );
    this.txtArticle = page.locator(
      'textarea[placeholder="Write your article (in markdown)"]'
    );

    this.txtTags = page.locator('input[placeholder="Enter tags"]');

    this.btnPublish = page.locator('button[type="button"]');

    this.articles = page.locator('div[class="container"] h1');
  }

  async fillForm(articleName) {
    await this.txtTitle.fill(articleName);
    await this.txtDescription.fill(articleName);
    await this.txtArticle.fill(articleName);
    await this.txtTags.fill(articleName);
  }
}

module.exports = { FormPage };
