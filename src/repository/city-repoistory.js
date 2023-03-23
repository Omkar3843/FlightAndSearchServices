const { City } = require('../models/index');

class CityRepoistory{
    async createCity({ name }){
        try{
            const city = await City.create({ name });
            return city;
        } catch(error){
            console.log("something went wrong in repoistory");
            throw {error};
        }
    }

    async deletecity(CityID){
        try {
            await City.destroy({   //use of where clause
                where: {
                    id:CityID
                }
            });
        } catch (error){
            console.log("something went wrong in repoistory");
            throw {error};
        }
    }

    async updatecity(cityid, data) {
        try {
            const city = await City.update(data, { 
                where: {
                    id: cityid
                }
            });
            return city;
        } catch (error){
            console.log("something went wrong in repoistory");
            throw{error};
        }
    }

    async getcity(cityid) {
        try {
            const city = await City.findByPK(cityid);
            return city;
        } catch (error){
            console.log("something went wrong in repoistory");
            throw{error};
        }
     }
}

module.exports = CityRepoistory;
