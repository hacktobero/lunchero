import Navbar from "../src/components/shared-components/navbar";
import { MealsContext } from "../src/Context/Context";
import { render, screen } from '@testing-library/react';
import {AuthContext} from '../src/Context/AuthContext'
import '@testing-library/jest-dom';


describe('Navbar component', () => {

    test('renders correct name of the company', () => {
        const token = jest.fn()
        render(<AuthContext.Provider value={[token]}><Navbar /></AuthContext.Provider>)
        const companyNameElement = screen.getByText('Lunchero');
        expect(companyNameElement).toBeInTheDocument();
    });

    test('renders correct photo of the currently logged in user', async () => {
        const token = jest.fn()
        render(<AuthContext.Provider value={[token]}><Navbar /></AuthContext.Provider>);
        const userPictureElement = await screen.findByRole('userIcon');
        expect(userPictureElement).toBeInTheDocument();
    });

    test('renders correct name if the user is currently logged in', () => {
        const token = jest.fn()
        const email = 'user@email.com'
        render(<AuthContext.Provider value={[token, email]}><Navbar /></AuthContext.Provider>);
        const userEmail = screen.getByRole('email');
        expect(userEmail).toBeInTheDocument('user@email.com');
    });



});