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
}


module.exports = {
    createSupplier
}