describe('Orders List', () => {
  beforeEach(() => {
    cy.visit('/orders/list');
  });

  it('should display 5 Orders', () => {
    cy.get('.table').should('have.length', 5);
  });

  it('should navigate to page 2', () => {
    cy.get('.pagination > :nth-child(3) > a').click();
    cy.get('.table').should('have.length', 5);
  });

  it('should click New Order from customer and navigate to login', () => {
    // Click New Customer
    cy.get('.navbar > .nav > :nth-child(2) > a').click();
    cy.url().should('include', '/login');
  });

});
