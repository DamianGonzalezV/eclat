describe("éclat home page", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/eclat/");
  });

  it("Should contain name brand and hero line", () => {
    cy.get('[data-qa="eclat-brand"]').contains("éclat");
    cy.get("h1").contains("Glow naturally");
    cy.get('[data-qa="glow-line-box"]').contains("Curated skincare for every");
  });

  it("Should contain icons for cart, map and shop button", () => {
    cy.get('[data-qa="shopping-cart-btn"]').should("exist");
    cy.get('[data-qa="nav-map-btn"]').should("exist");
    cy.get('[data-qa="shop-btn"]').should("exist");
  });
});
