describe('TC-01-English_Language', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
    })
    it('language Check', () => {
        cy.visit('https://blog.higo.id/')
        cy.get('form.relative > .w-full').click()
        cy.get('form.relative > .w-full').type('500%{enter}')
        cy.get('h2').should('not.contain', 'Application error: a client-side exception has occurred (see the browser console for more information).')



    })
})