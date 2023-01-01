const MONTHLYCLOSING = require('../models/monthlyClosingInventoryModel')

const createMonthlyInventory = async ( req, res ) => {
    console.log(req.body);
    try {
        const closing = await MONTHLYCLOSING.create({
            ...req.body
        })
    } catch ( error ) {

    }
}

const getAllMonthlyClosing = async ( req, res ) => {
    
}

module.exports = {
    createMonthlyInventory
}