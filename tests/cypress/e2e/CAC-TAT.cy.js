describe('Central de Atendimento ao Cliente TAT - Título', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  });

  it('Deve verificar se os campos estão visiveis', () => {
    cy.contains('Nome')
      .should('be.visible')

    cy.contains('Sobrenome')
      .should('be.visible')

    cy.contains('E-mail')
      .should('be.visible')

    cy.contains('Telefone')
      .should('be.visible')
  });

  it('Deve validar se os campus de Tipo de atendimento estão habilitados', () => {
    cy.contains('Tipo de atendimento ')
      .should('be.visible')

    cy.contains('Ajuda')
      .should('be.visible')

    cy.contains('Elogio')
      .should('be.visible')

    cy.contains('Feedback')
      .should('be.visible')
  });

  it('Deve validar os campos de contato', () => {
    cy.contains('Qual seu meio de contato preferencial?')
      .should('be.visible')

    cy.contains('E-mail')
      .should('be.visible')

    cy.contains('Telefone')
      .should('be.visible')

  });
  it('Deve validar os campos de Input', () => {
    cy.contains('Como podemos te ajudar?')
      .should('be.visible')

    cy.get('#open-text-area')
      .should('be.visible')
  });

  it('Deve preencher os campos superiores', () => {
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
  })
  it('Deve selecionar o Atendimento', () => {
    cy.contains('Ajuda')
      .should('be.visible')
      .click()
      .wait(1000)

    cy.contains('Elogio')
      .should('be.visible')
      .click()
      .wait(1000)

    cy.contains('Feedback')
      .should('be.visible')
      .click()
      .wait(1000)
  })
  it('Deve selecionar os tipos de contato', () => {
    cy.get('#check').within(() => {

      cy.contains('E-mail')
        .should('be.visible')
        .click()
        .wait(1000)

      cy.contains('Telefone')
        .should('be.visible')
        .click()
        .wait(1000)
    })
  })
  it('Deve escrever um feedback', () => {

    cy.contains('Como podemos te ajudar?')
      .should('be.visible')
      .next()
      .click()
      .type('VAMOS FLAMENGOOOOOO')
  })
});

