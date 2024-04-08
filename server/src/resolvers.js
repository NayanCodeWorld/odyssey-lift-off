const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage
    tracksForHome: (_, __, { dataSources }) => {
      //console.log("tracksForHome => ", dataSources);
      return dataSources.trackAPI.getTracksForHome();
    },

    // get a single track by ID, for the track page
    track: async (_, { id }, { dataSources }) => {
      // get track details
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Mutation: {
    // increments a track's numberOfViews property
    incrementTrackViews: async (_, {id}, {dataSources}) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null
        };
      }
    },
  },

  Track: {
    author: ({ authorId }, __, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;

//RESOLVER :- A function that populates data for a particular field in a GraphQL schema.