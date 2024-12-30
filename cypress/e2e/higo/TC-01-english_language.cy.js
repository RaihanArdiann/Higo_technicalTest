describe('TC-01-English_Language', () => {
  it('language Check', () => {
    cy.visit('https://higo.id/annualreport2024')
      .wait(2000)
    //remove modal
    cy.get('.ring-offset-background > .lucide')
      .click()
      .wait(2000)
    //click language
    cy.contains('label', 'English')
      .find('a')
      .click({ force: true })
      .wait(2000)
    //validate URL
    cy.url()
      .should('eq', 'https://higo.id/en/annualreport2024')
    //validate Indonesia text
    cy.get(':nth-child(2) > .grid-container > .content-start').scrollIntoView()
    cy.get('div[class="grid-container"]').find('p').should('not.contain', 'Setelah pandemi melanda, industri F&B dan transportasi di Indonesia nyatanya mulai kembali pulih. Optimisme ini sejalan dengan data dari Badan Pusat Statistik yang mencatat pertumbuhan industri F&B mencapai')

  })
})