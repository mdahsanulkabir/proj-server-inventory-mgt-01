const express = require('express');
const router = express.Router();


const {
        getSKUs,
        getSKU,
        createSKU,
        deleteSKU,
        updateSKU,updateAll
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
} = require('../controllers/warehouseController');

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
} = require('../middleware/userAuthMiddleware');

const { 
        checkAdminStatus 
} = require('../middleware/checkAdminMiddleware');

const {
        createSupplier,
        getAllSuppliers,
        supplierInsertMany,
        updateSupplier
} = require('../controllers/supplierController');

const {
        createSFGBOM,
        createMultipleBOM,
        getSFGBOM,
        getOneSFGBOM,
        updateSFGBOM,
        getThirdPartyPlasticActualBOM,
        getThirdPartyMetalSheetsBOM,
        getDescriptionofSFG,
        getBOMBySFGSourceCategory
} = require('../controllers/sfgBOMController');

const {
        getSfgSourceCategory,
        createSfgSourceCategory,
        deleteSfgSourceCategory,
        updateSfgSourceCategory
} = require('../controllers/sfgSourceCategoryController');

const {
        getSfgCategory,
        createSfgCategory,
        deleteSfgCategory,
        updateSfgCategory
} = require('../controllers/sfgCategoryController');

const {
        createPhantomPart,
        getPhantomParts,
        getOnePhantomPart,
        updatePhantomPart,
        deletePhantomPart
} = require ('../controllers/phantomPartsController');


const {
        postLCStatusOption,
        getLCStatusOptions,
        updateLCStatusOption,
        deleteLCStatusOption
} = require ('../controllers/lcStatusOptionController')

const {
        createLCSummary,
        getLCSummaries,
        updatedLCSummary
} = require ('../controllers/lcSummaryController');

const {
        createLCDetails,
        getLCDetails,
        updateLCDetails
} = require('../controllers/lcDetailController')

const {
        createSKUCategory,
        getSKUCategories,
        updateSKUCategory
} = require ('../controllers/skuCategoryController')

const {
        createPO,
        getPOs,
        getOnePO,
        updatePO,
        insertManyPO
} = require ('../controllers/poController')


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

//update all
router.get('/sku/updateall', updateAll)

//? ////////////////// ALL SKU CATEGORY ///////////////////////////

router.post('/createSkuCategory', createSKUCategory);

router.get('/getskucategories', getSKUCategories);

router.patch('/updateskucategory/:skuCategoryId', updateSKUCategory);

//? //////////////////   ALL ROUTES FOR RM    /////////////////////
//get all RM
router.get('/rms', getRMs);

//get a single RM
router.get('/rm/:id', getRM);

//create a new RM
router.post('/rm', createRM);

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
// router.post('/createSupplier',  createSupplier);

router.get('/getAllSuppliers', getAllSuppliers)

router.post('/supplierInsertMany', supplierInsertMany)

router.patch('/updateSupplier/:supplierId', updateSupplier)


//? ///////////////////////////   BOM MANAGEMENT   ////////////////////////////////
// create sfgBOM
router.post('/createSFGBOM',  createSFGBOM);

router.post('/createMultipleBOM', createMultipleBOM);

//get all sfg bom
router.get('/sfgBOM', getSFGBOM);

//get single sfgBOM
router.get('/sfgBOM/:sfgID', getOneSFGBOM);

//get thirdparty pastic actual bom
router.get('/getThirdPartyPlasticActualBOM', getThirdPartyPlasticActualBOM);

//get third party sheets bom
router.get('/getThirdPartyMetalSheetsBOM', getThirdPartyMetalSheetsBOM)

// get only description for identification
router.get('/getDescriptionofSFG', getDescriptionofSFG)

// get BOM by sfg category
router.get('/getBOMBySFGSourceCategory', getBOMBySFGSourceCategory)


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


//?  //////////////////////////////  LC STATUS ///////////////////////////////

// create lc status
router.post('/createLcStatus', postLCStatusOption);

// get all lc status
router.get('/getLCStatusOptions', getLCStatusOptions);

// update lc status
router.patch('/updateLCStatusOption/:optionID', updateLCStatusOption)

//delete lc status
router.delete('/deleteLCStatusOption/:optionID', deleteLCStatusOption)

//? ////////////////////////////  LC SUMMARY //////////////////////////////

// create new lc summary
router.post('/createLCSummary', createLCSummary);

router.get('/getLCSummaries', getLCSummaries);

// update lc summary
router.patch('/updateLCSumamry/:lcSummaryId', updatedLCSummary);


//? //////////////////////////// LC DETAILS  /////////////////////////////

// CREATE NEW LC DETAILS
router.post('/createLCDetails', createLCDetails);


router.get('/createLCDetails', getLCDetails);

// UPDATE LC DETAILS
router.patch('/updateLCDetails/:lcDetailId', updateLCDetails);


//? //////////////////////////// PO  /////////////////////////////

router.post('/createPO', createPO);
router.post('/insertManyPO', insertManyPO)

router.get('/getPOs', getPOs);
router.get('/getOnePO', getOnePO);

router.patch('/updatePO/:poId', updatePO);

module.exports = router