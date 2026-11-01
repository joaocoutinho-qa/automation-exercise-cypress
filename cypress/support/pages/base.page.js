class BasePage {
  constructor(selectors) {
    this.selectors = selectors;
  }

  element(name) {
    const selector = this.selectors[name];

    if (typeof selector !== 'string' || selector.trim() === '') {
      throw new Error(`Configure locator "${name}" in the page object before using it.`);
    }

    return cy.get(selector);
  }

  click(name) {
    return this.element(name).click();
  }

  type(name, value) {
    return this.element(name).clear().type(String(value));
  }

  select(name, value) {
    return this.element(name).select(String(value));
  }

  check(name) {
    return this.element(name).check();
  }

  assertVisible(name) {
    return this.element(name).should('be.visible');
  }

  assertText(name, text) {
    return this.element(name).should('contain.text', text);
  }
}

module.exports = BasePage;