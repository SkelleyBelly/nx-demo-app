import { App } from "./app"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

jest.mock("./routes", () => ({
    Home: () => <p>Home page</p>,
    ErrorPage: () => <p>Error page</p>
}))


describe('App component', () => {
    it("should render the home page when at the '/' route", async () => {
        render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)

        expect(screen.getByText("Home page")).toBeInTheDocument()
    })

    it("should render an error page when not at the '/' route", async () => {
        render(<MemoryRouter initialEntries={['/foo-bar']}><App /></MemoryRouter>)

        expect(screen.getByText("Error page")).toBeInTheDocument()
    })
})