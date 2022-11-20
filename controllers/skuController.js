const SKU = require('../models/skuModel');
const mongoose = require('mongoose');



//get all SKU
const getSKUs = async (req, res) => {
    const skus = await SKU.find({})
    res.status(200).json(skus);
}

//get single SKU
const getSKU = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such sku" });
    }

    const sku = await SKU.findById({ _id: id });

    if (!sku) {
        return res.status(404).json({ error: "No such sku" });
    }

    res.status(200).json(sku);
};

//create a new SKU
const createSKU = async (req, res) => {
    // console.log(req.body);
    const { model, color, sku } = req.body;

    //add doc to db
    try {
        const newSku = await SKU.create({
            model,
            color,
            sku
        })
        res.status(200).json(newSku);
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

//update an SKU
const updateSKU = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such sku" });
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

module.exports = {
    getSKUs,
    getSKU,
    createSKU,
    deleteSKU,
    updateSKU
}