const {RESTDataSource}  = require("@apollo/datasource-rest")

class TrackAPI extends RESTDataSource{
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";

    getTracksForHome(){
        return this.get('tracks');
    }

    getAuthor(authorId){
        return this.get(`author/${authorId}`);
    }
}

module.exports = TrackAPI;


//DATASOURCE :- An API, database, or service that a GraphQL server interacts with to handle client requests.