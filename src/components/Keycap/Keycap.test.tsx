import "jest-dom/extend-expect"
import React from "react"
import { cleanup, fireEvent, render } from "react-testing-library"
import Keycap from "./Keycap"

afterEach(cleanup)

test("Renders a button with the letter as its text", () => {
  const { getByText } = render(<Keycap letter={"A"} handler={() => true} />)
  expect(getByText("A")).toBeInTheDocument()
})

test("Fires the clicked event", () => {
  const handler = jest.fn()
  const { getByText } = render(<Keycap letter={"A"} handler={handler} />)

  fireEvent.click(getByText("A"))
  expect(handler).toHaveBeenCalledTimes(1)
})
