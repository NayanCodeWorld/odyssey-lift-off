const resolvers = {
    Query: {
        // get all tracks, will be used to populate the homepage
        tracksForHome: (_, __, {dataSources}) => {
            //console.log("tracksForHome => ", dataSources);
            return dataSources.trackAPI.getTracksForHome();
        },

        // get a single track by ID, for the track page
        track: async(_, {id}, {dataSources}) => {
            // get track details
            return dataSources.trackAPI.getTrack(id);
        },
    },

    Track: {
        author: ({authorId}, __, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },

        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        },
    }
};

module.exports = resolvers;

//RESOLVER :- A function that populates data for a particular field in a GraphQL schema.