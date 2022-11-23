const UNIT = require('../models/unitModel');
const mongoose = require('mongoose');

//get units
const getUnits = async ( req, res ) => {
    const units = await UNIT.find({});
    res.status(200).json(units);
}


//create new unit
const createUnit = async ( req, res ) => {
    // console.log(req.body);
    const { unitName, unitSymbol } = req.body;

    //add doc to db
    try {
        const newUnit = await UNIT.create({
            unitName, unitSymbol
        })
        res.status(200).json(newUnit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateUnit = async ( req, res ) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such Unit" });
    }

    const unit = await UNIT.findOneAndUpdate(
        { _id: id },
        {
        ...req.body,
        }
    );

    if (!unit) {
        return res.status(400).json({ error: "No such Unit" });
    }

    res.status(200).json(unit);
}

//update a unit

module.exports = {
    getUnits,
    createUnit,
    updateUnit
}
