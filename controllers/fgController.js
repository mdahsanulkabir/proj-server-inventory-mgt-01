const FGPROD = require('../models/FG/fgModel');

//post daily FG production
const postFgProductionMany = async (req, res) => {
    console.log(req.body);
    //add doc to db
    try {
        
        const fgProd = await FGPROD.insertMany([
            ...req.body
        ])
        res.status(200).json(fgProd);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//get daily production data
const getDailyProductionData = async (req, res) => {
    console.log(req.query);
    const { startDate, endDate } = req.query;
    try {
        const dailyProdData = await FGPROD.find({}).where('date').gte(startDate).lte(endDate);
        res.status(200).json(dailyProdData)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    postFgProductionMany,
    getDailyProductionData
}