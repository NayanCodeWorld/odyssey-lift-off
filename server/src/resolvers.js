const resolvers = {
    Query: {
        // get all tracks, will be used to populate the homepage
        tracksForHome: (_, __, {dataSources}) => {
            //console.log("tracksForHome => ", dataSources);
            return dataSources.trackAPI.getTracksForHome();
        }
    },

    Track: {
        author: ({authorId}, __, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    }
};

module.exports = resolvers;

//RESOLVER :- A function that populates data for a particular field in a GraphQL schema.