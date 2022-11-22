const express = require('express');
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const inventoryRoutes = require('./routes/inventoryRoutes');

//global middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api',inventoryRoutes);

//welcome route
app.get("/", (req, res) => {
    res.send("Hello");
})


//Database connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wbmcg.mongodb.net/skus?retryWrites=true&w=majority`, { dbName: "inventoryDB" })
    .then(() => {
        console.log('connected to db');
    })
    .catch((error) => {
        console.log(error);
    })


//start Server
app.listen(port, () => {
    console.log("Inventory server is running on port ", port);
})
