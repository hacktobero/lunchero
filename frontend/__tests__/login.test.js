import React from "react";
import '@testing-library/react'
import '@testing-library/jest-dom'
import {fireEvent, screen, render} from "@testing-library/react";
import Login from "../pages/login";

describe('describe login component', () => {

  test('checking if input type is changing correctly to text', () => {
    render(<Login />)
    const input = screen.getByRole('passwordInput')
    const eyeButton = screen.getByRole('FillEye')
    fireEvent.click(eyeButton)


    expect(input).toHaveAttribute('type', 'text')

  })

  test('checking if input is have password type by default', () => {
    render(<Login />)
    const input = screen.getByRole('passwordInput')

    expect(input).toHaveAttribute('type', 'password')

  })

  test('checking if icon is changing correctly', () => {
    render(<Login />)
    const eyeButton = screen.getByRole('FillEye')
    fireEvent.click(eyeButton)


    expect(screen.getByRole('FillEyeInvisible')).toBeInTheDocument()

  })

  test('checking if icon is returning to default', () => {
    render(<Login />)
    const eyeButton = screen.getByRole('FillEye')
    fireEvent.click(eyeButton)
    const fillEyeButton = screen.getByRole('FillEyeInvisible')
    fireEvent.click(fillEyeButton)

    expect(screen.getByRole('FillEye')).toBeInTheDocument()

  })
})
