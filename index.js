const express = require('express');
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const inventoryRoutes = require('./routes/inventoryRoutes')

//global middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api',inventoryRoutes)


app.get("/", (req, res) => {
    res.send("Hello Inventory");
})

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wbmcg.mongodb.net/skus?retryWrites=true&w=majority`, { dbName: "inventoryDB" })
    .then(() => {
        console.log('connected to db');
    })
    .catch((error) => {
        console.log(error);
    })


// // app.get("/ownParts", async (req, res) => {
// //     const query = {};
// //     try{
// //         await client.connect();
// //         const collection = client.db("inventoryDB").collection("ownParts");
// //         const cursor = collection.find(query);
// //         const result = await cursor.toArray();
// //         res.send(result);
// //     } finally {
// //         await client.close();
// //     }

// // })

// app.get("/ownParts/:id", async (req, res) => {
//     console.log(req.params);
//     const id = req.params.id;
//     const query = {_id : ObjectId(id)};
//     try{
//         await client.connect();
//         const collection = client.db("inventoryDB").collection("ownParts");
//         const result = await collection.findOne(query);
//         console.log(result);
//         res.send(result);
//     } 
//     catch(error) {
//         console.log(error);
//         throw error;
//     }finally {
//         await client.close();
//     }
// })

// app.put("/ownParts/:id", async (req, res) => {
//     console.log('req params :', req.params);
//     const id = req.params.id;
//     const filter = {_id : ObjectId(id)};
//     const options = {upsert : true}
//     const updatePart = req.body;
//     console.log('updated user info :',updatePart);
    
//     const updatedDoc = {
//         $set: {
//             Unit: updatePart.unit
//         }
//     }

//     try{
//         await client.connect();
//         const collection = client.db("inventoryDB").collection("ownParts");
//         const result = await collection.updateOne(filter, updatedDoc, options);
//         console.log('result :',result);
//         res.send(result);
//     } 
//     catch(error) {
//         console.log(error);
//         throw error;
//     }finally {
//         await client.close();
//     }
// })

// app.get("/users", async (req, res) => {
//     try{
//         await client.connect();
//         const collection = client.db("inventoryDB").collection("users");
//         const cursor = await collection.find({});
//         const result = await cursor.toArray();
//         // console.log(result);
//         res.send(result);
//     } 
//     catch(error) {
//         console.log(error);
//         throw error;
//     }finally {
//         await client.close();
//     }
// })

// app.put("/users/:id", async (req, res) => {
//     console.log('req params :', req.params);
//     const id = req.params.id;
//     const filter = {_id : ObjectId(id)};
//     const options = {upsert : true}
//     const updateUser = req.body;
//     console.log('updated user info :',updateUser);

//     const updatedDoc = {
//         $set: {
//             Age: updateUser.userAge
//         }
//     }

//     try{
//         await client.connect();
//         const collection = client.db("inventoryDB").collection("users");
//         const result = await collection.updateOne(filter, updatedDoc, options);
//         console.log('result :',result);
//         res.send(result);
//     } 
//     catch(error) {
//         console.log(error);
//         throw error;
//     }finally {
//         await client.close();
//     }
// })

app.listen(port, () => {
    console.log("Inventory server is running on port ", port);
})

//hello