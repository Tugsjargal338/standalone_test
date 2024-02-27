import pkg from '@apollo/client';
const { gql } = pkg;

export const typeDefs = gql`
    type User {
        _id: String!
        username: String!
    }

    type Message {
        _id: String!
        message: String!
        user: User!
    }

    type Query {
        helloQuery: String
    }

    type Mutation {
        helloMutation: String
    }

    type Subscription {
        getMessages: [Message]!
    }
`
