import '@testing-library/react'
import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Dish from "../src/components/client/meals-section/Dish";

describe('if dish counter work', () => {

  test('+ button increase quantity', () => {
    render(<Dish id={10} />)

    const divElement = screen.getByRole('itemsCounter')
    const buttonElement = screen.getByRole('increaseCartQuantity')

    fireEvent.click(buttonElement);

    expect(divElement).not.toContain("1")
  })
})


