import '@testing-library/react'
import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {MealsContext} from "../src/Context/Context";
import Dish from "../src/components/client/meals-section/Dish";


describe('if dish counter work', () => {

  const setState = jest.fn();


  test('+ button increase quantity', () => {

    const increaseCartQuantity = jest.fn(() => {})
    const decreaseCartQuantity = jest.fn(() => {})
    const getItemQuantity = jest.fn(() => {})

    render(
      <MealsContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity }} >
        <Dish id={10} />
      </MealsContext.Provider> )


    const buttonElement = screen.getByRole("increaseCartQuantity")

    fireEvent.click(buttonElement)

    const divElement = screen.getByRole("itemsCounter")

    expect(divElement).toEqual("1")
  })
})


