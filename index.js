const express = require('express');
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wbmcg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




app.get("/", (req, res) => {
    res.send("Hello Inventory");
})

app.get("/sku", async (req, res) => {
    const query = {};
    try{
        await client.connect();
        const collection = client.db("inventoryDB").collection("skus");
        const cursor = collection.find(query);
        const result = await cursor.toArray();
        res.send(result);
    } finally {
        await client.close();
    }

})

app.listen(port, () => {
    console.log("Inventory server is running on port ", port);
})