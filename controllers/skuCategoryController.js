const SKUCATEGORY = require('../models/FG/skuCategoryModel');

//create a NEW SKU CATEGORY
const createSKUCategory = async ( req, res ) => {
    try {
        const newSkuCategory = await SKUCATEGORY.create({
            ...req.body
        })
        res.status(200).json(newSkuCategory);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const getSKUCategories = async ( req, res ) => {
    try {
        const allSkuCategories = await SKUCATEGORY.find({})
        res.status(200).json(allSkuCategories);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

const updateSKUCategory = async ( req, res ) => {
    const { skuCategoryId } = req.params;
    try {
        const updatedSkuCategories = await SKUCATEGORY.find(
            { _id : skuCategoryId },
            { ...req.body }, { rew: true }
        )
        res.status(200).json(updatedSkuCategories);
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    createSKUCategory,
    getSKUCategories,
    updateSKUCategory
}