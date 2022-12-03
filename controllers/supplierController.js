const SUPPLIER = require('../models/supplierModel');


// create a new supplier
const createSupplier = async ( req, res ) => {
    // console.log(req.body);
    const { supplierID,
            supplierName,
            supplierEmail,
            supplierAddress,
            supplierContactPerson,
            supplierContactPersonPhoneNumber,
            supplierCategory,
            access } = req.body;

    // check if the supplier is authorized to create a supplier
    if( access.includes("createSupplier")) {
        //add doc to db
        try {
            const newSupplier = await SUPPLIER.create({
                supplierID,
                supplierName,
                supplierEmail,
                supplierAddress,
                supplierContactPerson,
                supplierContactPersonPhoneNumber,
                supplierCategory
            })
            res.status(200).json(newSupplier);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } else {
        res.status(400).json({message: "you don't have the acess for your intending operation"});
    }
}


module.exports = {
    createSupplier
}