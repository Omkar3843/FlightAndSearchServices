const express = require("express");

const { PORT } = require('./config/serverconfig');

const setupStartServer = async () => {

    // create the express object
    const app = express();
    // const PORT = 3000;
    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
        console.log(process.env);
    });
}

setupStartServer();