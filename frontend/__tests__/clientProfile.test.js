import ClientProfile from '../pages/clientProfile';
import {fireEvent, screen, render} from "@testing-library/react";
import {AuthContext} from '../src/Context/AuthContext'
import '@testing-library/jest-dom';


describe('Navbar component', () => {

    test('renders correct user email', () => {
        const email = 'user@email.com'
        render(<AuthContext.Provider value={[email]}><ClientProfile /></AuthContext.Provider>);
        const userEmail = screen.getByRole('email');
        expect(userEmail).toBeInTheDocument('user@email.com');
    });
    test('', () => {
        const token = jest.fn()
        render (<AuthContext.Provider value={[token]}><ClientProfile /></AuthContext.Provider>)
        const h2 = screen.getByRole('preferences')
        expect(h2).toBeInTheDocument()
        const select = screen.getByRole('select')
        expect(select).toBeInTheDocument()
    })
});