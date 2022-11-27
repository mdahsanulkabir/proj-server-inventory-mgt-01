const express = require('express');
const router = express.Router();


const {
        getSKUs,
        getSKU,
        createSKU,
        deleteSKU,
        updateSKU
} = require('../controllers/skuController');

const {
        getRMs,
        getRM,
        createRM,
        deleteRM,
        updateRM
} = require('../controllers/rmController');

const {
        postFgProductionMany,
        getDailyProductionData
} = require('../controllers/fgController');

const { 
        postNewWarehouse,
        getWarehouse,
} = require('../controllers/warehouseController')

const { 
        getUnits, createUnit, updateUnit
} = require('../controllers/unitController');

const {
        createNewUser,
        updateUser,
        getUsers
} = require('../controllers/userController');

const { 
        getUserToken, 
        authenticatedUser 
} = require('../middleware/userAuthMiddleware')

const { 
        checkAdminStatus 
} = require('../middleware/checkAdminMiddleware')


//? //////////////////   ALL ROUTES FOR SKU    /////////////////////
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


//? //////////////////   ALL ROUTES FOR RM    /////////////////////
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

//? //////////////////   ALL ROUTES FOR UNIT    /////////////////////
// get units
router.get('/units', getUnits);

// create unit
router.post('/unit', createUnit);

// update unit
router.patch('/unit/:id', updateUnit);

//? //////////////////   ALL ROUTES FOR FINISHED GOOD PRODUCTION    /////////////////////
//Posting a day's production
router.post('/fgprodmany', postFgProductionMany)

//get daily production data
router.get('/getDailyFGProduction', getDailyProductionData)


//? ////////////////////////////      ALL WAREHOUSE     ///////////////////////////////
//create a warehouse
router.post('/createwarehouse', getUserToken, authenticatedUser, postNewWarehouse)

//get warehouses
router.get('/warehouse', getWarehouse);


//? ////////////////////////////      ALL USER MANAGEMENT     ///////////////////////////////
// create a new user
router.post('/create-user', checkAdminStatus, createNewUser);

// update role and access of existing user
router.patch('/update-user', checkAdminStatus, updateUser)

// get all user credentials
router.get('/getUsers', getUsers)


module.exports = router