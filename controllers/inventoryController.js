const RM = require("../models/rmModel")
const SKU = require('../models/skuModel');
const mongoose = require('mongoose');



//get all SKU
const getSKUs = async (req, res) => {
    const skus = await SKU.find({})
    res.status(200).json(skus);
}

//get all RM
const getRMs = async (req, res) => {
    const rm = await RM.find({})
    res.status(200).json(rm);
}

//get single SKU
const getSKU = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such sku" });
    }

    const sku = await SKU.findById({ _id: id });

    if (!sku) {
        return res.status(404).json({ error: "No such todo" });
    }

    res.status(200).json(sku);
};

//get singe RM
const getRM = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such sku" });
    }
    const rm = await RM.findById({ _id: id });
    if (!rm) {
        return res.status(404).json({ error: "No such todo" });
    }
    res.status(200).json(rm);
};

//create a new SKU
const createSKU = async (req, res) => {
    console.log(req.body);
    const { model, color, sku } = req.body;

    //add doc to db
    try {
        const sku = await SKU.create({
            model,
            color,
            sku
        })
        res.status(200).json(sku);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//create a new RM
const createRM = async (req, res) => {
    console.log(req.body);
    // const { object_id, source_category, rm_category,
    //     sis_code, material_name, unit} = req.body;

    //add doc to db
    try {
        const rm = await RM.insertMany(
        //     {
        //     object_id, 
        //     source_category, 
        //     rm_category,
        //     sis_code, 
        //     material_name, 
        //     unit
        // }
        req.body
        )
        res.status(200).json(rm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//delete an SKU
const deleteSKU = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such sku" });
    }

    const sku = await SKU.findOneAndDelete({ _id: id });

    if (!sku) {
        return res.status(400).json({ error: "No such sku" });
    }
    res.status(200).json(sku);
  };

//delete a RM
const deleteRM = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such sku" });
    }

    const rm = await RM.findOneAndDelete({ _id: id });

    if (!rm) {
        return res.status(400).json({ error: "No such rm" });
    }

    res.status(200).json(rm);
};


//update an SKU
const updateSKU = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such todo" });
    }

    const sku = await SKU.findOneAndUpdate(
        { _id: id },
        {
        ...req.body,
        }
    );

    if (!sku) {
        return res.status(400).json({ error: "No such sku" });
    }

    res.status(200).json(sku);
};


//update a RM
const updateRM = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such todo" });
    }

    const rm = await RM.findOneAndUpdate(
        { _id: id },
        {
        ...req.body,
        }
    );

    if (!rm) {
        return res.status(400).json({ error: "No such rm" });
    }

    res.status(200).json(rm);
};



module.exports = {
    getSKUs,
    getSKU,
    getRMs,
    getRM,
    createSKU,
    createRM,
    deleteSKU,
    deleteRM,
    updateSKU,
    updateRM
}