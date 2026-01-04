Cypress._.times(3, () => {
    it('Deve abrir as pagina de politicas removendo o target e então clicando no link', () => {
        cy.visit('./src/privacy.html')   
        cy.contains('h1', 'CAC TAT - Política de Privacidade')
        .should('be.visible')
    });
})
