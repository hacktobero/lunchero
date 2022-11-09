import { fireEvent, render, screen } from '@testing-library/react'
import Breakfast from '../src/components/client/meals-section/MealDropdowns/Breakfast'
import ContextProvider from '../src/Context/Context';
import '@testing-library/jest-dom'

const meals = [{id: 1, name: 'Tomato soup', ingredients: 'Water, Tomatos, Soup Broth'},
{id: 2, name: 'A Hamburger', ingredients: 'Bread, Salad, Tomato, Beef, Mayonnaise'}]

describe('Breakfast component', () => { 
    test('opens mealdropdown', () => {
        render(<ContextProvider> <Breakfast meals={meals}/> </ContextProvider>);

        const toggleDropdownButton = screen.getByRole('button');
        fireEvent.click(toggleDropdownButton);
        const mealsContainerElement = screen.getByRole('meals-container');
        expect(mealsContainerElement).toBeInTheDocument();
    });
    test('closes mealdropdown', () => {
        render(<ContextProvider> <Breakfast meals={meals}/> </ContextProvider>);

        const toggleDropdownButton = screen.getByRole('button');
        fireEvent.click(toggleDropdownButton);
        const mealsContainerElement = screen.getByRole('meals-container');
        fireEvent.click(toggleDropdownButton);
        expect(mealsContainerElement).not.toBeInTheDocument();
    });
    
    test('renders list of meals', () => {
        render(<ContextProvider> <Breakfast meals={meals}/> </ContextProvider>);

        const toggleDropdownButton = screen.getByRole('button');
        fireEvent.click(toggleDropdownButton);
        const dishListElement = screen.getAllByRole('dish');
        expect(dishListElement).toHaveLength(2);
    })

});