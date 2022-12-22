const LCDETAIL = require('../models/lcDetailModel')


const createLCDetails = async ( req, res ) => {
    const { 
        fileNumber,
        secondarySupplierName,
        rm_id,
        lcQuantity,
        lcUnit,
        lcUnitPrice,
        inventoryUnitConversion
    } = req.body;

    try {
        const newLCDetail = await LCDETAIL.create({
            fileNumber,
        secondarySupplierName,
        rm_id,
        lcQuantity,
        lcUnit,
        lcUnitPrice,
        inventoryUnitConversion
        })
        res.status(200).json(newLCDetail);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const getLCDetails = async ( req, res ) => {
    try {
        const lcDetails = await LCDETAIL.find({});
        res.status(200).json(lcDetails);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateLCDetails = async ( req, res ) => {
    const { lcDetailId } = req.params;

    try {
        const updatedLcDetails = await LCDETAIL.findByIdAndUpdate(
            { _id : lcDetailId },
            { ...req.body},
            { new : true }
        )
        res.status(200).json(updatedLcDetails);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createLCDetails,
    getLCDetails,
    updateLCDetails
}