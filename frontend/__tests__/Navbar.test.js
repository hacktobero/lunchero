import Navbar from "../src/components/navbar";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
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

    test('renders correct name if the user is not currently logged in', () => {
        render(<Navbar />);
        const userNameElement = screen.getByTestId('username').textContent;
        expect(userNameElement).toMatch('You are currently not logged in');
    });

    test('renders correct name of the user that is currently logged in', async () => {
        render(<Navbar />)
        const userNameElement = await screen.findByText('pawelsdjjd2');
        expect(userNameElement).to
    });


});