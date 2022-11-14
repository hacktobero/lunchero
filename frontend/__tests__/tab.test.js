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

    test('render correctly active class name', () => {
        let className = 'flex duration-200 text-white font-bold justify-center shadow-sm self-center items-center w-1/5 rounded-t-2xl rounded-b-sm h-full bg-green-700 hover:bg-green-700 border border-gray text-2xl';
        render(<Tab key={1} day={'Monday'} active={'Monday'} onDayChange={() => { }} />);
        const tabElement = screen.getByText('Monday');
        expect(tabElement).toHaveAttribute('class', className)
    });
    
    test('render correctly active class name', () => {
        let className = 'flex cursor-pointer  duration-200 text-white font-bold justify-center shadow-sm self-center items-center w-1/5 hover:bg-green-700  rounded-t-2xl  h-full bg-green-700';
        render(<Tab key={1} day={'Monday'} active={'Friday'} onDayChange={() => { }} />);
        const tabElement = screen.getByText('Monday');
        expect(tabElement).not.toHaveAttribute('class', className)
    });
})
