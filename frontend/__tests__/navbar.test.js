import Navbar from "../src/components/shared-components/navbar";
import { MealsContext } from "../src/Context/Context";
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

    test('renders correct name if the user is not currently logged in', () => {
        render(<Navbar />);
        const userNameElement = screen.getByTestId('username').textContent;
        expect(userNameElement).toMatch('Loading...');
    });
    
    test('renders correct name of the currently logged in user', async () => {
        render(
        <MealsContext.Provider value={{
            data: {
                user: {
                    username: 'pawel2'
                }
            }
        }}>
        <Navbar />
        </MealsContext.Provider>);
        const userNameElement = await screen.findByText('pawel2');
        expect(userNameElement).toBeInTheDocument();
    })



});