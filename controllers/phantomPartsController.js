const PHANTOMPARTS = require('../models/phantomPartsModel');
const mongoose = require("mongoose")

const createPhantomPart = async ( req, res ) => {
    console.log(req.body);

    const { object_id, substitutes } = req.body;

    try {
        const newPhantomPart = await PHANTOMPARTS.create({
            object_id, substitutes
        })
        res.status(200).json(newPhantomPart);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const getPhantomParts = async ( req, res ) => {
    console.log(req.body);

    try {
        const newPhantomPart = await PHANTOMPARTS.find({})
        res.status(200).json(newPhantomPart);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}
const getOnePhantomPart = async ( req, res ) => {
    console.log(req.body);
    const { phantomPartId } = req.params;

    try {
        const newPhantomPart = await PHANTOMPARTS.findById({
            _id : phantomPartId
        })
        res.status(200).json(newPhantomPart);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
    
}
const updatePhantomPart = async ( req, res ) => {
    console.log(req.body);
    const { phantomPartId } = req.params;

    try {
        const newPhantomPart = await PHANTOMPARTS.findByIdAndUpdate(
            { _id : phantomPartId },
            { object_id, substitutes }
        )
        res.status(200).json(newPhantomPart);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
    
}
const deletePhantomPart = async ( req, res ) => {
    console.log(req.body);
    const { phantomPartId } = req.params;

    try {
        const newPhantomPart = await PHANTOMPARTS.findOneAndDelete({
            _id : phantomPartId
        })
        res.status(200).json(newPhantomPart);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    createPhantomPart,
    getPhantomParts,
    getOnePhantomPart,
    updatePhantomPart,
    deletePhantomPart
}