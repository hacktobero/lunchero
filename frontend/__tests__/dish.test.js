import '@testing-library/react'
import React from "react";
import { render } from "@testing-library/react";
import {MealsContext} from "../src/Context/Context";
import Dish from "../src/components/client/meals-section/Dish";

describe('if dish counter work', () => {
 function items(cartItems) {
  render(
    <MealsContext.Provider value={{cartItems}} >
      <Dish />
    </MealsContext.Provider> )
 }

  test('+ button increase quantity', () => {
    const increaseCartQuantity = jest.fn()
    render(
      <MealsContext.Provider value={{increaseCartQuantity}} >
        <Dish />
      </MealsContext.Provider> )



    increaseCartQuantity(10)

    expect(items([{}])).toBeTruthy()
  })
})


