const SFGBOM = require('../models/sfgBOMModel');

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

module.exports = {
    createSFGBOM
}