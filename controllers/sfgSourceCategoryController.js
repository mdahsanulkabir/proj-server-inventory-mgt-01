const SFGSOURCECATEGORY = require ('../models/sfgSourceCategoryModel');

const mongoose = require('mongoose');

//get all sfg source category
const getSfgSourceCategory = async (req, res) => {
    try {
        const sfgSourceCategory = await SFGSOURCECATEGORY.find({})
        res.status(200).json(sfgSourceCategory);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const createSfgSourceCategory = async ( req, res ) => {
    console.log(req.body);
    const { source_category } = req.body;
    try {
        const newSfgSourceCategory = await SFGSOURCECATEGORY.create(
            { source_category }
        )
        res.status(200).json({newSfgSourceCategory})
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

//delete a sfg source category
const deleteSfgSourceCategory = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such SFG Source Category" });
        }
    
        const sfgSourceCategory = await SFGSOURCECATEGORY.findOneAndDelete({ _id: id });
    
        if (!sfgSourceCategory) {
            return res.status(400).json({ error: "No such no such SFG Source Category" });
        }
    
        res.status(200).json(sfgSourceCategory);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
};

// update a sfg source category
const updateSfgSourceCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such SFG Source Category" });
    }

    const sfgSourceCategory = await SFGSOURCECATEGORY.findOneAndUpdate(
        { _id: id },
        {
        ...req.body,
        }
    );

    if (!sfgSourceCategory) {
        return res.status(400).json({ error: "no such SFG Source Category" });
    }

    res.status(200).json(sfgSourceCategory);
};

module.exports = {
    getSfgSourceCategory,
    createSfgSourceCategory,
    deleteSfgSourceCategory,
    updateSfgSourceCategory
}