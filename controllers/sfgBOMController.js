const SFGBOM = require('../models/sfgBOMModel');
const mongoose = require("mongoose")

const createSFGBOM = async ( req, res ) => {
    console.log(req.body);

    const { object_id, source_category, sis_code,
        material_name, children } = req.body

    try {
        const newSfgBOM = await SFGBOM.create({
            object_id,
            source_category,
            sis_code,
            material_name,
            children
        })
        res.status(200).json(newSfgBOM);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const getSFGBOM = async ( req, res ) => {
    const { sfgID } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(sfgID)) {
            return res.status(404).json({ error: "no such SFG" });
        }
        const sfg = await SFGBOM.findById({ _id: sfgID }).populate({
            path : 'children.object_id'
        })
        if (!sfg) {
            return res.status(404).json({ error: "No such SFG" });
        }
        res.status(200).json(sfg);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createSFGBOM,
    getSFGBOM
}