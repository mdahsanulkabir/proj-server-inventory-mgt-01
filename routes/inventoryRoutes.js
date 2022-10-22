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
        updateRM
} = require('../controllers/inventoryController')


//get all SKU
router.get('/skus', getSKUs)

//get all RM
router.get('/rms', getRMs)

//get a single SKU
router.get('/sku/:id', getSKU)

//get a single RM
router.get('/rm/:id', getRM)

//create a new SKU
router.post('/sku', createSKU)

//create a new RM
router.post('/rm', createRM)


//delete a SKU
router.delete('/sku/:id', deleteSKU)

//delete a RM
router.delete('/rm/:id', deleteRM)

//update an SKU
router.patch('/sku/:id', updateSKU)

//update an RM
router.patch('/rm/:id', updateRM)

module.exports = router