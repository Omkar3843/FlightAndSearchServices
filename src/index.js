const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require('./config/serverconfig');

const setupStartServer = async () => {

    // create the express object
    const app = express();
    // const PORT = 3000;

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    
    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
        console.log(process.env);
    });
}

setupStartServer(); 