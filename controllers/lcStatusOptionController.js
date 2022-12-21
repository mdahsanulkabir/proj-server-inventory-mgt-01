const LCSTATUSOPTION = require('../models/lcStatusOptionModel');

const postLCStatusOption = async ( req, res ) => {
    const { status, description } = req.body;

    try {
        const newLCStatusOption = await LCSTATUSOPTION.create({
            status, description
        })
        res.status(200).json(newLCStatusOption);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}


const getLCStatusOptions = async ( req, res ) => {

    try {
        const lcStatusOptions = await LCSTATUSOPTION.find({})
        res.status(200).json(lcStatusOptions);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const updateLCStatusOption = async ( req, res ) => {
    const { optionID } = req.params;
    const { status, description } = req.body;
    try {
        const updatedlcstatusoption = await LCSTATUSOPTION.findByIdAndUpdate(
            { _id : optionID },
            { status, description },
            { new: true }
        )
        res.status(200).json(updatedlcstatusoption);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const deleteLCStatusOption = async ( req, res ) => {
    const { optionID } = req.params;
    try {
        const deletedlcstatusoption = await LCSTATUSOPTION.findByIdAndDelete(
            { _id : optionID }
        )
        res.status(200).json(deletedlcstatusoption);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = {
    postLCStatusOption,
    getLCStatusOptions,
    updateLCStatusOption,
    deleteLCStatusOption
}