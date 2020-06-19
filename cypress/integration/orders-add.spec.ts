describe('Add Order', () => {
  beforeEach(() => {
    cy.visit('/orders/add/0');
    cy.get('[name="email"]').type('test@test.com');
    cy.get('[name="password').type('password1');
    cy.get('.btn-success').click();
    cy.url().should('include', '/orders/add');
  });
  //
  // it('should login user', () => {
  //
  // });

  it('should contain a list of all customers', () => {
    // there are 22 customers but one option is 'select customer'
    cy.get('[name="customer"]').find('option').should('have.length', 23);
  });

  it('should display product name input and product price input', () => {
    cy.get('select').select('Ted James');
    cy.get('[name="productName"]').should('be.visible');
    cy.get('[name="itemCost"]').should('be.visible');
  });


  it('should add one order to the list', () => {
    cy.get('select').select('Ted James');
    cy.get('[name="productName"]').type('Test Item');
    cy.get('[name="itemCost"]').type('125.25');
    cy.get('.add-btn').click();
    // The table should contain one order item and a tr for the summary - total 2 tr.
    cy.get('.table tr').should('have.length', 2);
  });


  it('should insert order', () => {
    cy.get('select').select('Ted James');
    cy.get('[name="productName"]').type('Test Item');
    cy.get('[name="itemCost"]').type('125.25');
    cy.get('.add-btn').click();
    // The table should contain one order item and a tr for the summary - total 2 tr.
    cy.get('.btn-success').click();
    cy.url().should('include', '/orders/list');
  });

  it('should pop up deactivate modal', () => {
    cy.get('select').select('Ted James');
    cy.get('.btn-default').click();
    cy.get('.modal').should('have.css', 'opacity', '1');
  });
});
