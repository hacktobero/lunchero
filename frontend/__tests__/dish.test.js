import '@testing-library/react'
import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {MealsContext} from "../src/Context/Context";
import Dish from "../src/components/client/meals-section/Dish";


describe('if dish counter work', () => {
//  function items(cartItems) {
//   render(
//     <MealsContext.Provider value={{cartItems}} >
//       <Dish />
//     </MealsContext.Provider> )
//  }

  test('+ button increase quantity', () => {
    const increaseCartQuantity = jest.fn(() =>  10)
    const decreaseCartQuantity = jest.fn(() =>  10)
    const getItemQuantity = jest.fn(() =>  10)
    render(
      <MealsContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity }} >
        <Dish />
      </MealsContext.Provider> )


    const buttonElement = screen.getByRole("increaseCartQuantity")
    fireEvent.click(buttonElement)

    expect(getItemQuantity).toEqual("quantity:1")
  })
})


