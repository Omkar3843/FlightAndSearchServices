const {Flights} = require('../models/flights');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId == data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice){
            Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
        }
        return filter;
    }
    
    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;
        } catch(error){
            console.log("something went wrong in create-repoistory");
            throw {error};
        }
    }

    async getFlight(flightId){
        try{
            const filterObject = this.#createFilter(fillter);
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }



}

module.exports = FlightRepository;

/*
Filter can look  like
{
    where: {
        arrivalAirportId: 2,
        departureAirportId: 4,
        price: {[op.gte]: 4000}
    }
}

*/

