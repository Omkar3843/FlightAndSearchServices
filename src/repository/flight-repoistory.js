const {Flights} = require('../models/flights');

class FlightRepository {
    
    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;
        } catch(error){
            console.log("something went wrong in create-repoistory");
            throw {error};
        }
    }
}

module.exports = FlightRepository;