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

const getAllSuppliers = async ( req, res ) => {
    try {
        const allSuppliers = await SUPPLIER.find({})
        res.status(200).json(allSuppliers);
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

const supplierInsertMany = async (req, res) => {
    console.log(req.body);
    try {
        const suppliers = await SUPPLIER.insertMany(req.body)
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

const updateSupplier = async ( req, res ) => {
    console.log(req.body);
    const { supplierId } = req.params;
    try {
        const updatedSupplier = await SUPPLIER.findByIdAndUpdate(
            { _id : supplierId },
            { ...req.body },
            { new : true}
        )
        res.status(200).json(updatedSupplier);
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}


module.exports = {
    createSupplier,
    getAllSuppliers,
    supplierInsertMany,
    updateSupplier
}