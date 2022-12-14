const RM = require("../models/rmModel");
const mongoose = require('mongoose');

//get all RM
const getRMs = async (req, res) => {
    const rm = await RM.find({})
    res.status(200).json(rm);
}


//get single RM
const getRM = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such rm" });
    }
    const rm = await RM.findById({ _id: id });
    if (!rm) {
        return res.status(404).json({ error: "No such rm" });
    }
    res.status(200).json(rm);
};

//create a new RM
const createRM = async (req, res) => {
    // console.log(req.body);
    const { object_id } = req.body;
    console.log(object_id);
    //add doc to db
    try {
        const newRM = await RM.create({
            
        })
        res.status(200).json(newRM);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//delete a RM
const deleteRM = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such rm" });
    }

    const rm = await RM.findOneAndDelete({ _id: id });

    if (!rm) {
        return res.status(400).json({ error: "No such rm" });
    }

    res.status(200).json(rm);
};


//update a RM
const updateRM = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such rm" });
    }

    const rm = await RM.findOneAndUpdate(
        { _id: id },
        { ...req.body }, { new : true }
    );

    if (!rm) {
        return res.status(400).json({ error: "No such rm" });
    }

    res.status(200).json(rm);
};


module.exports = {
    getRMs,
    getRM,
    createRM,
    deleteRM,
    updateRM
}