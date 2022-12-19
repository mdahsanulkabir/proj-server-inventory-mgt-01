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
        getUsers,
        updateUserAccess,
        getUserAccessControl
} = require('../controllers/userController');

const { 
        getUserToken, 
        authenticatedUser 
} = require('../middleware/userAuthMiddleware')

const { 
        checkAdminStatus 
} = require('../middleware/checkAdminMiddleware')

const {
        createSupplier
} = require('../controllers/supplierController')

const {
        createSFGBOM,
        getSFGBOM,
        getOneSFGBOM,
        updateSFGBOM,
        getThirdPartyPlasticActualBOM,
        getThirdPartySheetsBOM
} = require('../controllers/sfgBOMController')

const {
        getSfgSourceCategory,
        createSfgSourceCategory,
        deleteSfgSourceCategory,
        updateSfgSourceCategory
} = require('../controllers/sfgSourceCategoryController')

const {
        getSfgCategory,
        createSfgCategory,
        deleteSfgCategory,
        updateSfgCategory
} = require('../controllers/sfgCategoryController')

const {
        createPhantomPart,
        getPhantomParts,
        getOnePhantomPart,
        updatePhantomPart,
        deletePhantomPart
} = require ('../controllers/phantomPartsController')


//? //////////////////   ALL ROUTES FOR SKU    /////////////////////
//get all SKU
router.get('/skus', getSKUs);

//get a single SKU
router.get('/sku/:id', getSKU);

//create a new SKU
router.post('/sku', createSKU);

//delete a SKU
router.delete('/sku/:id', deleteSKU);

//update an SKU
router.patch('/sku/:id', updateSKU);


//? //////////////////   ALL ROUTES FOR RM    /////////////////////
//get all RM
router.get('/rms', getRMs);

//get a single RM
router.get('/rm/:id', getRM);

//create a new RM
router.post('/rm', checkAdminStatus, createRM);

//delete a RM
router.delete('/rm/:id', deleteRM);

//update an RM
router.patch('/rm/:id', updateRM);

//? //////////////////   ALL ROUTES FOR UNIT    /////////////////////
// get units
router.get('/units', getUnits);

// create unit
router.post('/unit', createUnit);

// update unit
router.patch('/unit/:id', updateUnit);

//? //////////////////   ALL ROUTES FOR FINISHED GOOD PRODUCTION    /////////////////////
//Posting a day's production
router.post('/fgprodmany', postFgProductionMany);

//get daily production data
router.get('/getDailyFGProduction', getDailyProductionData);


//? ////////////////////////////      ALL WAREHOUSE     ///////////////////////////////
//create a warehouse
router.post('/createwarehouse', getUserToken, authenticatedUser, postNewWarehouse);

//get warehouses
router.get('/warehouse', getWarehouse);


//? ////////////////////////////      ALL USER MANAGEMENT     ///////////////////////////////
// create a new user
router.post('/create-user', checkAdminStatus, createNewUser);

// update role and access of existing user
router.patch('/update-user', checkAdminStatus, updateUser);

// get all user credentials
router.get('/getUsers', getUsers);

// get the user accessControl
router.get('/getUserAccessControl/:email', checkAdminStatus, getUserAccessControl);

// update user access
router.patch('/update-user-access', checkAdminStatus, updateUserAccess);


//? ////////////////////////////      SUPPLIER MANAGEMENT     ///////////////////////////////
// create a new supplier
router.post('/createSupplier', getUserToken, authenticatedUser, createSupplier);


//? ///////////////////////////   BOM MANAGEMENT   ////////////////////////////////
// create sfgBOM
router.post('/createSFGBOM', checkAdminStatus, createSFGBOM);

//get all sfg bom
router.get('/sfgBOM', getSFGBOM);

//get single sfgBOM
router.get('/sfgBOM/:sfgID', getOneSFGBOM);

//get thirdparty pastic actual bom
router.get('/getThirdPartyPlasticActualBOM', getThirdPartyPlasticActualBOM);

//get third party sheets bom
router.get('/getThirdPartySheetsBOM', getThirdPartySheetsBOM)


//? ///////////////////////////   SFG SOURCE CATEGORY   ///////////////////////////
//create SFG SOURCE CATEGORY
router.post('/createSfgSourceCategory', createSfgSourceCategory);

// get the sfg source categories
router.get('/getSfgSourceCategory', getSfgSourceCategory);

//? ///////////////////////////   SFG  CATEGORY   ///////////////////////////
//create SFG SOURCE CATEGORY
router.post('/createSfgCategory', createSfgCategory);

// get the sfg source categories
router.get('/getSfgCategory', getSfgCategory);

// update Sfg bom
router.patch('/update-sfgBOM/:sfgId', updateSFGBOM);


//? ///////////////////////////// PHANTOM PARTS ////////////////////////////////

// create a phantom part
router.post('/createPhantomPart', createPhantomPart);

// get all phantom parts
router.get('/getPhantomParts', getPhantomParts);

//get one phantom part
router.get('/getOnePhantomPart/:phantomPartId', getOnePhantomPart);

// update a phantom part
router.patch('/updatePhantomPart/:phantomPartId', updatePhantomPart);

// delete a phantom part
router.delete('/deletePhantomPart/:phantomPartId', deletePhantomPart);


module.exports = router