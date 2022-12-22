const LCSUMMARY = require('../models/lcSummaryModel');

const createLCSummary = async ( req, res ) => {
    const { 
        fileNumber,
        lcNumber,
        lcDate,
        piNumber,
        primarySupplierName,
        lcValue,
        shipmentDate,
        origin,
        factoryETA,
        presentStatus,
        customsCost,
        transportCost,
        insuranceCost,
        lcCommissionCost
    } = req.body;

    try {
        const newLCSummary = await LCSUMMARY.create({
            fileNumber,
            lcNumber,
            lcDate,
            piNumber,
            primarySupplierName,
            lcValue,
            shipmentDate,
            origin,
            factoryETA,
            presentStatus,
            customsCost,
            transportCost,
            insuranceCost,
            lcCommissionCost
        })
        res.status(200).json(newLCSummary);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const getLCSummaries = async ( req, res ) => {
    try {
        const lcSummries = await LCSUMMARY.find({});
        res.status(200).json(lcSummries);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const updatedLCSummary = async (req,res) => {
    const { lcSummaryId } = req.params;
    try { 
        const updatedLCSummary = await LCSUMMARY.findByIdAndUpdate(
            { _id : lcSummaryId },
            { ...req.body },
            { new : true }
        )
        res.status(200).json(updatedLCSummary);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createLCSummary,
    getLCSummaries,
    updatedLCSummary
}