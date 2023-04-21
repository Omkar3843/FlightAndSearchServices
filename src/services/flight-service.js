const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');

/**
 * {
 *   flightNumber, 
 *   airplaneId ,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price
 *   totalSeats -> airplane
 * }
 */

class FlightService {

    constructor() {
        this.airplaneRespository = new AirplaneRepository();
        this.flightrespository = new FlightRepository();
    }

    async createFlight(data){
        
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRespository.getAirplane(data.airplaneId);
            const flight = await this.flightrespository.createFlight({
                ...data,totalseats:airplane.capacity
            });
        } catch(error){
            console.log("Something went wrong at service layer");
            throw(error);
        }
    }
}

module.exports = FlightService;

