import { gql } from 'apollo-server-express';

export default gql`
    type Query{
        parks: [Park]
        attractions(park: String): [Attraction]
    }

    type Park{
        name: String!
    }

    type Attraction{
        id: String!
        name: String!
        waitTime: Int
        status: String
        active: Boolean
        lastUpdate: String
        fastPass: Boolean
    }
`;