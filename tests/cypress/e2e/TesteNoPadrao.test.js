describe('Realiza um feedback com email', () => {
    it('Realiza um atendimento pelo blog', () => {
        cy.acessaPagina()
        cy.preencheCampoSuperior()
        cy.selecionaProduto()
        cy.selecoinaContatoPreferencial()
        cy.selecoinaTipoAtendimento()
        cy.enviaInformacoes()
        cy.validaEnvio()
    })
})
