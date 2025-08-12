describe("Shop journey from Shop Now hero button", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/eclat/");
  });

  it("Should click Shop now button and start journey", () => {
    cy.get('[data-qa="hero"]').should("be.visible");
    cy.get('[data-qa="shop-btn"]').click();
    cy.get('[data-qa="hero"]').should("not.be.visible");

    // the next button could change and fail tests
    cy.get('[data-qa="add-cart-btn"]').should("be.visible").click();
  });
});

describe("Shop journey from Serum item below hero", function () {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/eclat/");
  });

  it("Should click on add button on serum item", () => {
    // cy.scrollTo(0, 100);
    cy.scrollTo(0, 2000);
    cy.get('[data-qa="serum-btn"]').should("have.length", "3");
    cy.get('[data-qa="serum-btn"]').eq("1").click();
  });
});
