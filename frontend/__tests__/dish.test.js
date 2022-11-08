import React from "react";
import '@testing-library/react';
import '@testing-library/jest-dom';
import {fireEvent, render, screen} from "@testing-library/react";
import ContextProvider from "../src/Context/Context";
import Dish from "../src/components/client/meals-section/Dish";

describe('if dish is rendered correctly ', () => {

  test('the meal name is present', () => {

    render(
      <ContextProvider >
        <Dish name="kanapka z tuńczykiem" />
      </ContextProvider> )

    const name = screen.getByText("kanapka z tuńczykiem")

    expect(name).toBeInTheDocument();
  })

  test('the meal ingredients is present', () => {

    render(
      <ContextProvider >
        <Dish ingredients="Steak, Fries" />
      </ContextProvider> )

    const ingredients = screen.getByText("Ingredients: Steak, Fries")

    expect(ingredients).toBeInTheDocument();
  })

})

describe('if dish counter work', () => {

  test('+ button increase quantity', () => {

    render(
      <ContextProvider >
        <Dish id={10} />
      </ContextProvider> )

    const buttonElement = screen.getByRole("increaseCartQuantity")

    fireEvent.click(buttonElement)

    expect(screen.getByText("1")).toBeInTheDocument();
  })

  test('- button decrease quantity', () => {

    render(
      <ContextProvider >
        <Dish id={10} />
      </ContextProvider> )

    const increaseButtonElement = screen.getByRole("increaseCartQuantity")
    const decreaseButtonElement = screen.getByRole("decreaseCartQuantity")
    fireEvent.click(increaseButtonElement)
    fireEvent.click(increaseButtonElement)
    fireEvent.click(decreaseButtonElement)

    expect(screen.getByText("1")).toBeInTheDocument();
  })
})
