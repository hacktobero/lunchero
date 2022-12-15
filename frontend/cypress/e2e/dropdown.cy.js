import Dish from "../../src/components/client/meals-section/Dish";

describe('dropdowns', () => {

  it('Breakfast', () => {
    cy.Login('test@test.com', '12345678')
    cy.get('button[name="Breakfast"]').click()
    cy.contains('Ingredients:')
  })

  it('Lunch', () => {
    cy.Login('test@test.com', '12345678')
    cy.get('button[name="Lunch"]').click()
    cy.contains('Ingredients:')
  })

  it('Extra', () => {
    cy.Login('test@test.com', '12345678')
    cy.get('button[name="Extra"]').click()
    cy.contains('Ingredients:')
  })
})
