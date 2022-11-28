import { render, screen } from '@testing-library/react'
import MealOperator from '../src/components/operator/shared-operator/MealOperator'
import '@testing-library/jest-dom'
import {MealsContext} from '../src/Context/Context'

describe('MealOperator component', () => {
    test('render list of dishes', async () => {
        render( <MealsContext.Provider value={{
                data: {
                    menu: {
                        meals: [
                            {
                                name: "A steak with fries",
                                id: 54,
                                type: "Breakfast",
                                ingredients: "Steak, Fries",
                                tag: "Meat"
                            },
                            {
                                name: "Salad with tofu",
                                id: 52,
                                type: "Breakfast",
                                ingredients: "Salad, Tofu, Tomato, Vinegar sauce",
                                tag: "Vegan"
                            }
                        ]
                    }
                }
            }}>
                    <MealOperator />
                </MealsContext.Provider>
        )
        const dishElementList = await screen.findAllByRole('dishElement')
        expect(dishElementList).toHaveLength(2)
    })
    test('render AddMeal component', () => {
        render(
            <MealsContext.Provider value={{show:true}}>
                <MealOperator />
            </MealsContext.Provider>
        )
        const AddMealDiv = screen.getByRole('AddMealMainDiv')
        expect(AddMealDiv).toBeInTheDocument()
    })
})
