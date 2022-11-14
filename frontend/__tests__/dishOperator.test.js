import { render, screen} from '@testing-library/react'
import DishOperator from '../src/components/operator/meals-section-operator/DishOperator'
import '@testing-library/jest-dom'

describe('DishOperator component', () => {
    test('render corretly name', () => {
        render(<DishOperator name='tomato soup'/>)
        const name = screen.getByRole('name')
        expect(name).toHaveTextContent('tomato soup')

    })
    test('render corretly ingredients', () => {
        render(<DishOperator ingredients='tomato, broth, spices'/>)
        const ingredients = screen.getByRole('ingredients')
        expect(ingredients).toHaveTextContent('tomato, broth, spices')
    })
} )
