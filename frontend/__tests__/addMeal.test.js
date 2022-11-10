import { render, screen, fireEvent } from '@testing-library/react'
import AddMeal from '../src/components/operator/operatorView/OperatorAddMenu/AddMeal'
import {MealsContext} from "../src/Context/Context";
import '@testing-library/jest-dom'

describe('AddMeal component', ()=>{
    test('check closing button', () => {
        let show = true
        const showHandler = () => { show = false }
        render( <MealsContext.Provider value={{show, showHandler}}> 
                    <AddMeal /> 
                </MealsContext.Provider>)
        const closingButton = screen.getByRole('closeButton')
        fireEvent.click(closingButton)
        expect(show).toBe(false)
    })
})
