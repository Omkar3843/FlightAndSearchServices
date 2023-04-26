const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) =>{
    try{
        
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            sucess: true,
            err: {},
            message: 'Successfully created a Airport'
        });
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create Airport',
            err: error
        });
    }
}

module.exports = {
    create
}