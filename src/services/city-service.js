const { CityRepoistory } = require('../repository/index');

// const cityRepo = new CityRepoistory();

class CityService {

    constructor () {
        this.cityRepository =  new CityRepoistory(); 
    }

    async createCity(data) {
        try {
            const city = await cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    // async getAllCities(filter) {
    //     try {
    //         const cities = await this.cityRepo.getAllCities({name: filter.name});
    //         return cities;
    //     } catch (error) {
    //         console.log("Something went wrong at service layer");
    //         throw {error};
    //     }
    // }

    async getAllCities(filter) {
        try {
            const cities = await cityRepository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer -> getallcities");
            throw {error};
        }
    }
}

module.exports = CityService;
