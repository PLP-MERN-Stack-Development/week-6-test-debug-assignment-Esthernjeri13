describe('Login Flow', () => {
  it('logs in user with valid credentials', () => {
    cy.visit('http://localhost:3002/login');
    cy.get('input[name=email]').type('test@example.com');
    cy.get('input[name=password]').type('password123');
    cy.get('button[type=submit]').click();
    cy.contains('Welcome').should('exist');
  });
});
