const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require('./config/serverconfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const { Airport, City } = require('./models/index');
const { Airplane } = require('./models/index');

const setupStartServer = async () => {

    // create the express object
    const app = express();
    
    // Middlewears
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
        // console.log(ity);
        // await City.create({
        //     name: "New Delhi",
        // })

        // const repo = new Cityrepoistory();
        // repo.createCity({name: "New delhi"});

        // const airports = await Airport.findAll();
        // console.log(airports);

        await Airplane.create({
            modelNumber: 'Bombardire CRJ'
        });


    });
}

setupStartServer();  