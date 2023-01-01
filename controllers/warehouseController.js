const WAREHOUSE = require('../models/Location/warehouseModel');



//create new warehouse
const postNewWarehouse = async ( req, res ) => {
    console.log("from the main function of the route -> ",req.body);
    const { name, space, description } = req.body;
    //add to db
    try{
        const newWarehouse = await WAREHOUSE.create({
            name, 
            space, 
            description
        })
        res.status(200).json(newWarehouse);
    } catch ( error ) {
        res.status(400).json({ error: error.message, errorcode: error.code });
    }
};

//get all warehouses
const getWarehouse = async (req, res) => {
    const warehouse = await WAREHOUSE.find({})
    console.log(warehouse);
    res.status(200).json(warehouse)
}


module.exports = {
    postNewWarehouse,
    getWarehouse,
}