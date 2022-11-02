import Navbar from "../src/components/navbar";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe(Navbar, () => {
    it('Navbar displays correct name of the company', () => {
        const { getByTestId } = render(<Navbar />);
        const logoValue = getByTestId('logo').textContent;
        expect(logoValue).toBe('Lunchero');
    });
    
});