const productSearchCases = require('../fixtures/product-search-cases.json');
const HomePage = require('../support/pages/home.page');
const ProductsPage = require('../support/pages/products.page');

describe.skip('Products', () => {
  it('Test Case 8: Verify All Products and product detail page', () => {
    // Arrange
    const homePage = new HomePage();
    const productsPage = new ProductsPage();

    // Act
    homePage.visit();
    homePage.openProducts();
    productsPage.assertProductListVisible();
    productsPage.openFirstProductDetails();

    // Assert
    productsPage.assertProductDetailsVisible();
  });

  productSearchCases.forEach((term) => {
    it(`Test Case 9: Search Product (${term})`, () => {
      // Arrange
      const homePage = new HomePage();
      const productsPage = new ProductsPage();

      // Act
      homePage.visit();
      homePage.openProducts();
      productsPage.search(term);

      // Assert
      productsPage.assertSearchResultsVisible();
    });
  });
});