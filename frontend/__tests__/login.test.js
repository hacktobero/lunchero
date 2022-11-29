import React from "react";
import '@testing-library/react'
import '@testing-library/jest-dom'
import {fireEvent, screen, render} from "@testing-library/react";
import Login from '../pages/index'
import {AuthContext} from '../src/Context/AuthContext'

describe('login component', () => {

  test('checking if input type is changing correctly to text', () => {
    const setToken = (token) => {return}
    console.log(typeof setToken);
    render(<AuthContext.Provider value={[setToken]}><Login /></AuthContext.Provider>)
    const input = screen.getByRole('passwordInput')
    const eyeButton = screen.getByRole('FillEyeInvisible')
    fireEvent.click(eyeButton)


    expect(input).toHaveAttribute('type', 'text')

  })

  test('checking if input is have password type by default', () => {
    const setToken = jest.fn()
    render(<AuthContext.Provider value={[setToken]}><Login /></AuthContext.Provider>)
    const input = screen.getByRole('passwordInput')

    expect(input).toHaveAttribute('type', 'password')

  })

  test('checking if icon is changing correctly', () => {
    const setToken = jest.fn()
    render(<AuthContext.Provider value={[setToken]}><Login /></AuthContext.Provider>)
    const eyeButton = screen.getByRole('FillEyeInvisible')
    fireEvent.click(eyeButton)


    expect(screen.getByRole('FillEye')).toBeInTheDocument()

  })

  test('checking if icon is returning to default', () => {
    const setToken = jest.fn()
    render(<AuthContext.Provider value={[setToken]}><Login /></AuthContext.Provider>)
    const eyeButton = screen.getByRole('FillEyeInvisible')
    fireEvent.click(eyeButton)
    const fillEyeButton = screen.getByRole('FillEye')
    fireEvent.click(fillEyeButton)

    expect(screen.getByRole('FillEyeInvisible')).toBeInTheDocument()

  })
})
