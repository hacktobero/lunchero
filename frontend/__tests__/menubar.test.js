import { render, screen } from '@testing-library/react';
import MenuBar from '../src/components/client/MenuBar';
import '@testing-library/jest-dom';

describe('MenuBar component', () => {
    test('renders list of days elements', () => {
        render(<MenuBar />);
        const dayListElement = screen.getAllByRole('day');
        expect(dayListElement).toHaveLength(5);
    })
})