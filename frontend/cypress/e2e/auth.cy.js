describe('Flujo de autenticación', () => {
  it('debería redirigir al login si no hay token', () => {
    cy.visit('https://auth2-0.vercel.app');
    cy.url().should('include', '/login');
  });
});