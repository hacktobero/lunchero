describe('Log in', () => {
    it('Log in contains title', () => {
        cy.visit('http://localhost:3000/')
        cy.get('h2').contains('Log In')
    })
})
