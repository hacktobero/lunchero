import { fireEvent, render, screen } from '@testing-library/react'
import Tab from '../src/components/shared-components/Tab'
import '@testing-library/jest-dom'

describe('Tab Component', () => {
    test('renders a tab with specified name of the day', () => {
        render(<Tab key={1} day={'Monday'} active={'Monday'} onDayChange={() => { }} />);
        const tabElement = screen.getByText('Monday');
        expect(tabElement).toBeInTheDocument();
    });

    test('if it changing active state when the button was clicked', () => {
        let active = 'Monday';
        render(<Tab key={1} day={'Monday'} active={active} onDayChange={() => { active = 'Tuesday' }} />);
        const tabElement = screen.getByText('Monday');
        fireEvent.click(tabElement);
        expect(active).toBe('Tuesday');
    });

    test('render correctly when active class name', () => {

        render(<Tab key={1} day={'Monday'} active={'Monday'} onDayChange={() => { }} />);
        const tabElement = screen.getByText('Monday');
        expect(tabElement).toHaveClass('bg-green-700 hover:bg-green-700 border border-gray md:text-2xl sm:text-xl')
    });

    test('render correctly when not active class name', () => {

        render(<Tab key={1} day={'Monday'} active={'Friday'} onDayChange={() => { }} />);
        const tabElement = screen.getByText('Monday');
      expect(tabElement).toHaveClass('bg-green-400 border md:text-xl sm:text-lg')
    });
})
