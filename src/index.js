const express = require("express");
const { City } = require('./models/index');
const bodyparser = require("body-parser");

const { PORT } = require('./config/serverconfig');
const ApiRoutes = require('./routes/index');
const Cityrepoistory = require('./repository/city-repoistory');

const setupStartServer = async () => {

    // create the express object
    const app = express();
    // const PORT = 3000;

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
    });
}

setupStartServer(); 