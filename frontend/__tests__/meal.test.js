import '@testing-library/react'
import '@testing-library/jest-dom'
import React from "react";
import {render, screen} from "@testing-library/react";
import Meal from "../src/components/client/meals-section/Meal";

describe('Testing Meal.js', () => {

  test('Breakfast render check', () => {
    render(<Meal />)

    expect(screen.getByText('Breakfast')).toBeInTheDocument();
  })

  test('Lunch render check', () => {
    render(<Meal />)

    expect(screen.getByText('Lunch')).toBeInTheDocument();
  })

  test('Extra render check', () => {
    render(<Meal />)

    expect(screen.getByText('Extra')).toBeInTheDocument();
  })

})
