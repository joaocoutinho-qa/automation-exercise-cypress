const BasePage = require('./base.page');

class ProductsPage extends BasePage {
  constructor() {
    super({
      productList: '.features_items',
      firstProductDetailLink: '.features_items .choose a[href^="/product_details/"]:first',
      productDetails: '.product-information',
      searchInput: '#search_product',
      searchButton: '#submit_search',
      searchResults: '.features_items',
      firstAddToCartButton: '.features_items .productinfo a.add-to-cart:first',
      addedToCartModal: '#cartModal .modal-content',
      continueShoppingButton: '#cartModal .close-modal',
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
    this.click('firstAddToCartButton');
    // Waiting for the modal guarantees the add-to-cart request finished
    this.assertVisible('addedToCartModal');
    return this.click('continueShoppingButton');
  }
}

module.exports = ProductsPage;