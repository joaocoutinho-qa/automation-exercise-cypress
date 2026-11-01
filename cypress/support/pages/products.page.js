const BasePage = require('./base.page');

class ProductsPage extends BasePage {
  constructor() {
    super({
      productList: null,
      firstProductDetailLink: null,
      productDetails: null,
      searchInput: null,
      searchButton: null,
      searchResults: null,
      firstAddToCartButton: null,
    });
  }

  assertProductListVisible() {
    return this.assertVisible('productList');
  }

  openFirstProductDetails() {
    return this.click('firstProductDetailLink');
  }

  assertProductDetailsVisible() {
    return this.assertVisible('productDetails');
  }

  search(query) {
    this.type('searchInput', query);
    return this.click('searchButton');
  }

  assertSearchResultsVisible() {
    return this.assertVisible('searchResults');
  }

  addFirstProductToCart() {
    return this.click('firstAddToCartButton');
  }
}

module.exports = ProductsPage;