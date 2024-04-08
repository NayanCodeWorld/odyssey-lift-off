const {RESTDataSource}  = require("@apollo/datasource-rest")

class TrackAPI extends RESTDataSource{
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";

    getTracksForHome(){
        return this.get('tracks');
    }

    getTrack(trackId){
        return this.get(`track/${trackId}`);
    }

    getAuthor(authorId){
        return this.get(`author/${authorId}`);
    }

    getTrackModules(trackId){
        return this.get(`track/${trackId}/modules`);
    }

    incrementTrackViews(trackId){
        return this.patch(`track/${trackId}/numberOfViews`);
    }

}

module.exports = TrackAPI;


//DATASOURCE :- An API, database, or service that a GraphQL server interacts with to handle client requests.