import Navbar from "../src/components/navbar";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Navbar component', () => {

    test('renders correct name of the company', () => {
        render(<Navbar />)
        const companyNameElement = screen.getByText('Lunchero');
        expect(companyNameElement).toBeInTheDocument();
    });
    test('renders correct photo of the currently logged in user', async () => {
        render(<Navbar />);
        const userPictureElement = await screen.findByRole('img');
        expect(userPictureElement).toBeInTheDocument();
    });
    test('renders alert if the user is not logged in ', async () => {
        render(<Navbar />);
        const userElement = await screen.findByText('You are not currently logged in');
        expect(userElement).toBeInTheDocument();
    });

});