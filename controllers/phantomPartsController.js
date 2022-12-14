const PHANTOMPART = require('../models/phantomPartModel');
const SFGSOURCECATEGORY = require ('../models/sfgSourceCategoryModel');
const SFGCATEGORY = require ('../models/sfgCategoryModel');
const mongoose = require("mongoose")

const createPhantomPart = async ( req, res ) => {
    console.log(req.body);

    const { object_id,
            material_name,
            sap_code,
            sis_code,
            substitutes } = req.body;

    const source_category = await SFGSOURCECATEGORY.findOne({source_category : "Phantom"})
    const sfg_category = await SFGCATEGORY.findOne({sfg_category : "Phantom"})

    try {
        const newPhantomPart = await PHANTOMPART.create({
            object_id,
            material_name,
            source_category,
            sfg_category,
            sap_code,
            sis_code,
            substitutes
        })
        console.log(newPhantomPart);
        res.status(200).json(newPhantomPart);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const getPhantomParts = async ( req, res ) => {
    console.log(req.body);

    try {
        const newPhantomPart = await PHANTOMPART.find({})
        res.status(200).json(newPhantomPart);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}
const getOnePhantomPart = async ( req, res ) => {
    console.log(req.body);
    const { phantomPartId } = req.params;

    try {
        const newPhantomPart = await PHANTOMPART.findById({
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
        const newPhantomPart = await PHANTOMPART.findByIdAndUpdate(
            { _id : phantomPartId },
            { object_id, substitutes },
            { new : true }
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
        const newPhantomPart = await PHANTOMPART.findOneAndDelete({
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