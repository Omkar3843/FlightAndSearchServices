const { Op } = require('sequelize');
const { City } = require('../models/index');

class CityRepoistory{

    async createCity({ name }){
        try{
            const city = await City.create({ name });
            return city;
        } catch(error){
            console.log("something went wrong in create-repoistory");
            throw {error};
        }
    }

    async deleteCity(CityID){
        try {
            await City.destroy({   //use of where clause
                where: {
                    id:CityID
                }
            });
        } catch (error){
            console.log("something went wrong in de;ete-repoistory");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            // const city = await City.update(data, { 
            //     where: {
            //         id: cityId
            //     }
            // });
            // return city;

            

            const city = await City.findByPK(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error){
            console.log("something went wrong in update-repoistory");
            throw{error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPK(cityId);
            return city;
        } catch (error){
            console.log("something went wrong in getCity-repoistory");
            throw{error};
        }
    }

    async getAllCities (filter){
        try{
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error){
            console.log("something went wrong in getAllCities-repoistory");
            throw{error};
        }

    }
}

module.exports = CityRepoistory;
