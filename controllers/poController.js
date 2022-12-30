const PO = require('../models/poModel');

// create PO
const createPO = async ( req, res ) => {
    const { poNumber, poDate, partsOfPO } = req.body;
    console.log(poNumber, poDate, partsOfPO);
    try {
        const newPO = await PO.create({
            poNumber, poDate, supplierId, partsOfPO
        })
        res.status(200).json(newPO);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//get POs
const getPOs = async ( req, res ) => {
    console.log(req.body);
    try {
        const pos = await PO.find({})
        .populate({
            path : 'partsOfPO.object_id'
        })
        .populate({
            path : 'supplierId'
        })
        res.status(200).json(pos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//get one PO
const getOnePO = async ( req, res ) => {
    const { poId } = req.params;
    console.log(poId);
    try {
        const po = await PO.findById({ _id : poId})
        res.status(200).json(po);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//update PO
const updatePO = async ( req, res ) => {
    const { poId } = req.params;
    console.log(poId);
    console.log(req.body);
    try {
        const updated_PO = await PO.findOneAndUpdate(
            { _id : poId },
            { ...req.body },
            { new : true }
        )
        res.status(200).json(updated_PO);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createPO,
    getPOs,
    getOnePO,
    updatePO
}