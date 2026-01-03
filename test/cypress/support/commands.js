Cypress.Commands.add('acessaPagina', () => {
    cy.visit('./src/index.html')
});

Cypress.Commands.add('preencheCampoSuperior', () => {
    cy.contains('Nome')
        .should('be.visible')
        .next()
        .type('Giorgian')

    cy.contains('Sobrenome')
        .should('be.visible')
        .next()
        .type('de Arrascaeta')

    cy.contains('E-mail')
        .should('be.visible')
        .next()
        .type('arrascaeta@gmail.com')

    cy.contains('Telefone')
        .should('be.visible')
        .next()
        .type('279999999999')
});

Cypress.Commands.add('selecionaProduto', () => {
    cy.contains('Produto')
        .should('be.visible')
        .next()
        .select('Blog')
});

Cypress.Commands.add('selecoinaContatoPreferencial', () => {
    cy.get('#check').within(() => {

    cy.contains('E-mail')
        .should('be.visible')
        .click()

    });
});

Cypress.Commands.add('selecoinaTipoAtendimento', () => {
    cy.contains('Como podemos te ajudar?')
        .should('be.visible')
        .next()
        .click()
        .type('Pra cima deles flamengo')
    });

Cypress.Commands.add('enviaInformacoes', () => {
    cy.contains('Enviar')
        .should('be.visible')
        .click()
    });
    
Cypress.Commands.add('validaEnvio', () => {
    cy.contains('Mensagem enviada com sucesso.')
        .should('be.visible')  
});