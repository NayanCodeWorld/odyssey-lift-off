const gql = require('graphql-tag');

const typeDefs = gql`
type Query{
    tracksForHome: [Track!]!
    track(id: ID!): Track
}

type Mutation{
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
}


type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
}

"A track is a group of Modules that teaches about a specific topic"
type Track{
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module]
}

"A Module is a single unit of teaching. Multiple modules compose a Track"
type Module{
    id: ID!
    title: String!
    length: Int
}

"Author of a complete Track or a Module"
type Author{
    id: ID!
    name: String!
    photo: String
}

`;

module.exports = typeDefs;

//Query :- A request for specific data from a GraphQL server. Clients define the structure of the response, enabling precise and efficient data retrieval.