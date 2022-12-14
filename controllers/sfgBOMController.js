const SFGBOM = require('../models/sfgBOMModel');
const mongoose = require("mongoose")

const createSFGBOM = async ( req, res ) => {
    console.log(req.body);

    const { 
        object_id,
        material_name,
        source_category,
        sfg_category,
        sap_code,
        sis_code,
        children } = req.body;

    try {
        const newSfgBOM = await SFGBOM.create({
            object_id,
            material_name,
            source_category,
            sfg_category,
            sap_code,
            sis_code,
            children
        })
        res.status(200).json(newSfgBOM);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

// create multiple BOM
const createMultipleBOM = async ( req, res ) => {

    // consolelog(...req.body);
    // req.body.map(element => console.log(element))
    try {
            const BOMs = await SFGBOM.insertMany(req.body)
            res.status(200).json(BOMs);

    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

//all sfg bom
const getSFGBOM = async (req,res) => {
    try {
        const sfg = await SFGBOM.find({}).populate({
            path : 'children.object_id'
        })
        res.status(200).json(sfg);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//get single SFG BOM
const getOneSFGBOM = async ( req, res ) => {
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

const updateSFGBOM = async ( req, res ) => {
    const { sfgId } = req.params;
    const { 
        object_id,
        material_name,
        source_category,
        sfg_category,
        sap_code,
        sis_code,
        children 
    } = req.body

    try {
        const updatedSFG = await SFGBOM.findOneAndUpdate(
            { _id : sfgId },
            {
                object_id,
                material_name,
                source_category,
                sfg_category,
                sap_code,
                sis_code,
                children
            }
        )
        res.status(200).json(updatedSFG);
    } catch (  error ) {
        res.status(400).json({ error: error.message });
    }
}

const getThirdPartyPlasticActualBOM = async (req, res) => {
    try {
        const sfg = await SFGBOM.find({source_category : '6395ad40dd62aaa6a3b58712'})
        .populate({
            path: 'source_category'
        })
        .populate({
            path : 'children.object_id'
        })
        // const newSFG = sfg.map(data => {
        //     return {
        //         sfgId : _id,

        //     }
        // })
        res.status(200).json(sfg);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getThirdPartyMetalSheetsBOM = async (req, res) => {
    try {
        const sfg = await SFGBOM.find({source_category : '6395ad50dd62aaa6a3b58714'})
        .populate({
            path: 'source_category'
        })
        .populate({
            path : 'children.object_id'
        })
        res.status(200).json(sfg);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getDescriptionofSFG = async ( req, res ) => {
    try {
        const sfgBOM = await SFGBOM.find({})
        .select('_id object_id sap_code sis_code material_name')
        res.status(200).json(sfgBOM);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const getBOMBySFGSourceCategory = async ( req, res ) => {
    const  {sfgSourcecategory}  = req.query;
    const sfgSourceCategory_id = sfgSourcecategory
    try {
        const sfgBOMAsPerSourceCategory = await SFGBOM.find({source_category : sfgSourceCategory_id})
        .populate({
            path: 'source_category'
        })
        .populate({
            path : 'children.object_id'
        })
        res.status(200).json(sfgBOMAsPerSourceCategory)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    createSFGBOM,
    createMultipleBOM,
    getSFGBOM,
    getOneSFGBOM,
    updateSFGBOM,
    getThirdPartyPlasticActualBOM,
    getThirdPartyMetalSheetsBOM,
    getDescriptionofSFG,
    getBOMBySFGSourceCategory
}