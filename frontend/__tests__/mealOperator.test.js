import { render, screen, waitFor } from '@testing-library/react'
import MealOperator from '../src/components/operator/MealOperator'
import '@testing-library/jest-dom'
import ContextProvider from '../src/Context/Context'
import jestConfig from '../jest.config'

describe('MealOperator component', () => {
    test('render list of dishes', async () => {
        render( <ContextProvider>
                    <MealOperator />
                </ContextProvider>
        )
        const dishElementList = await screen.findAllByRole('dishElement')
        expect(dishElementList).not.toHaveLength(0)
    })
})