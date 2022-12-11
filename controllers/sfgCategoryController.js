const SFGCATEGORY = require ('../models/sfgCategoryModel');

const mongoose = require('mongoose');

//get all sfg source category
const getSfgCategory = async (req, res) => {
    try {
        const sfgCategory = await SFGCATEGORY.find({})
        res.status(200).json(sfgCategory);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const createSfgCategory = async ( req, res ) => {
    console.log(req.body);
    const { sfg_category } = req.body;
    try {
        const newsfgCategory = await SFGCATEGORY.create(
            { sfg_category }
        )
        res.status(200).json({newsfgCategory})
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

//delete a sfg source category
const deleteSfgCategory = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such SFG Source Category" });
        }
    
        const sfgCategory = await SFGCATEGORY.findOneAndDelete({ _id: id });
    
        if (!sfgCategory) {
            return res.status(400).json({ error: "No such no such SFG Source Category" });
        }
    
        res.status(200).json(sfgCategory);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
};

// update a sfg source category
const updateSfgCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such SFG Source Category" });
    }

    const sfgCategory = await SFGCATEGORY.findOneAndUpdate(
        { _id: id },
        {
        ...req.body,
        }
    );

    if (!sfgCategory) {
        return res.status(400).json({ error: "no such SFG Source Category" });
    }

    res.status(200).json(sfgCategory);
};

module.exports = {
    getSfgCategory,
    createSfgCategory,
    deleteSfgCategory,
    updateSfgCategory
}