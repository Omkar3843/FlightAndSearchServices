const { CityRepoistory } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepoistory = new this.cityRepoistory();
    }

    async createcity(data) {
        try {
            const city = await this.cityRepoistory.createcity(data);
            return city;
        } catch (error){
            console.log("something went wrong at service layer");
            throw {error};
        }
    }

    async deletecity(cityid) {
        try{
            const response = await this.cityRepoistory.deletecity(cityid);
            return response;

        } catch (error){
            console.log("something went wrong at service layer");
            throw {error};
        }
    }

    async updatecity (cityid,data){
        try{
            const city = await this.cityRepoistory.updatecity(cityid,data);
            return city;
        } catch (error){
            console.log("something went wrong at service layer");
            throw {error};
        }
    }

    async getcity(cityid){
        try{
            const city = await this.cityRepoistory.getcity(cityid);
            return city;
        } catch (error){
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
}