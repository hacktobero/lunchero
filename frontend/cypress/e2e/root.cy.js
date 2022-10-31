describe('Navigation', () => {
    it('Root contains weekdays from Monday to Friday', () => {
        cy.visit('http://localhost:3000/')
        cy.get('div').contains('Monday')
        cy.get('div').contains('Tuesday')
        cy.get('div').contains('Wednesday')
        cy.get('div').contains('Thursday')
        cy.get('div').contains('Friday')
    })
})
