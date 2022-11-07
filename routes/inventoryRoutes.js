const express = require('express');
const router = express.Router();

const { getSKUs, 
        getRMs,
        getSKU,
        getRM,
        createSKU,
        createRM,
        deleteSKU,
        deleteRM,
        updateSKU,
        updateRM,
        postFgProductionMany,
        getDailyProductionData,
        postNewWarehouse,
        getWarehouse,
        createPart
} = require('../controllers/inventoryController')

////////////////////   ALL ROUTES FOR SKU    /////////////////////
//get all SKU
router.get('/skus', getSKUs)

//get a single SKU
router.get('/sku/:id', getSKU)

//create a new SKU
router.post('/sku', createSKU)

//delete a SKU
router.delete('/sku/:id', deleteSKU)

//update an SKU
router.patch('/sku/:id', updateSKU)


////////////////////   ALL ROUTES FOR RM    /////////////////////
//get all RM
router.get('/rms', getRMs)

//get a single RM
router.get('/rm/:id', getRM)

//create a new RM
router.post('/rm', createRM)

//delete a RM
router.delete('/rm/:id', deleteRM)

//update an RM
router.patch('/rm/:id', updateRM)


////////////////////   ALL ROUTES FOR FINISHED GOOD PRODUCTION    /////////////////////
//Posting a day's production
router.post('/fgprodmany', postFgProductionMany)

//get daily production data
router.get('/getDailyFGProduction', getDailyProductionData)


//////////////////////////////      ALL WAREHOUSE     ///////////////////////////////
//create a warehouse
router.post('/createwarehouse', postNewWarehouse)

//get warehouses
router.get('/warehouse', getWarehouse)


router.post('/createpart', createPart)




module.exports = router