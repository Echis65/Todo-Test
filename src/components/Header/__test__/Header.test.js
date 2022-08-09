import { render, screen } from "@testing-library/react"
import Header from "../Header.js"

test('display title passed into prop', () => {
    render(<Header title="My header"/>);
    const title = screen.getByText(/my header/i)
    expect(title).toBeInTheDocument()
})