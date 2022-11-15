import { App } from './app';
import { render, screen } from "@testing-library/react"
import { ErgonoMockedProvider as MockedProvider } from "graphql-ergonomock";
import { buildClientSchema, IntrospectionQuery } from 'graphql';
import introspectionResult from '@nx-demo-app/shared-graphql-interface/schema'

const mockUser = {
    name: "Nathan Skelley",
    email: "nathan@heytempo.com"
}


describe('App component', () => {
    it("should pass a basic test", async () => {
        render(<MockedProvider schema={buildClientSchema(introspectionResult as unknown as IntrospectionQuery)} mocks={{
            GetUsers: {
                users: [{
                    name: mockUser.name,
                    email: mockUser.email
                }]
            }
        }}><App /></MockedProvider>)

        await screen.findByText(mockUser.name)
    })

    it("should render an error message", async () => {
        render(<MockedProvider schema={buildClientSchema(introspectionResult as unknown as IntrospectionQuery)} mocks={{
            GetUsers: {
                users: [{
                    name: () => {
                        throw new Error("Whoops")
                    }
                }]
            }
        }}><App /></MockedProvider>)

        await screen.findByText("There was an error!")
    })
})