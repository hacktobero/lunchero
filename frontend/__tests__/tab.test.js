import { render, screen } from '@testing-library/react'
import Tab from '../src/components/menubar/Tab'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Tab day="Monday" active="Monday" onDayChange={() => { }} />)

        const text = screen.getByText('Monday')

        expect(text).toBeInTheDocument()
    })
})
