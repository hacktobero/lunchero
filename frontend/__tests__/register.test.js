import React from "react";
import '@testing-library/react'
import '@testing-library/jest-dom'
import {fireEvent, screen, render} from "@testing-library/react";
import Register from '../pages/register'
import {AuthContext} from '../src/Context/AuthContext'

describe('register component',() =>{
    test('error border test',() => {
        const setToken = (token) => {return}
        console.log(typeof setToken);
        render(<AuthContext.Provider value={[setToken]}><Register /></AuthContext.Provider>)
        const passwordInput = screen.getByRole('passwordInput')
        const repeatPasswordInput = screen.getByRole('repeatPasswordInput')
        const button = screen.getByRole('button')
        fireEvent.change(passwordInput, {target: {value: 'Test123!'}})
        fireEvent.change(repeatPasswordInput, {target: {value: 'Test321!'}})
        fireEvent.click(button)
        expect(passwordInput).toHaveClass('border-red-600')
    })
    test('recive object', () => {
        const setToken = jest.fn()
        render(<AuthContext.Provider value={[setToken]}><Register /></AuthContext.Provider>)
        const passwordInput = screen.getByRole('passwordInput')
        const repeatPasswordInput = screen.getByRole('repeatPasswordInput')
        const emailInput = screen.getByRole('emailInput')
        const button = screen.getByRole('button')
        fireEvent.change(passwordInput, {target: {value: 'Test123!'}})
        fireEvent.change(repeatPasswordInput, {target: {value: 'Test123!'}})
        fireEvent.change(emailInput, {target: {value: 'testemail123@mail.com'}})
        const authRegisterValues = {
            password: passwordInput.value,
            repeatPassword: repeatPasswordInput.value,
            email: emailInput.value,
        }
        expect(authRegisterValues).toEqual({"email": "testemail123@mail.com", "password": "Test123!", "repeatPassword": "Test123!"})
    })
})