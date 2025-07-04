describe('Flujo de autenticación', () => {
  it('debería redirigir al login si no hay token', () => {
    cy.visit('http://localhost:3000');
    cy.url().should('include', '/login');
  });
});