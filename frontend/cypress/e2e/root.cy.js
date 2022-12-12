import Breakfast from "../../src/components/client/meals-section/MealDropdowns/Breakfast";

describe('Log in', () => {
    it('Log in contains title', () => {
        cy.visit('http://localhost:3000/')
        cy.get('h2').contains('Log In')
    })
    it('logging in', () => {
        cy.Login('test@gmail.com', '123456789')
        cy.contains('Lunchero')
    })
})


