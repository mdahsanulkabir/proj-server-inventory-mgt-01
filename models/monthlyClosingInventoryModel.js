const mongoose = require('mongoose')

const Schema = mongoose.Schema

const monthlyClosingSchema = new Schema ({

    closingDate : {
        type : Date,
        require : true
    },
    inventoriesInWarehouseLocation : [{
        // need another model for multiple localtions of 6 warehouses, all the production sections, all 3rd party suppliers
        locationId : {
            type: Schema.Types.ObjectId,
            refPath : 'inventoriesInWarehouseLocation.location_model_type'
        },
        location_model_type : {
            type : String,
            enum: ['WAREHOUSE','PRODUCTIONSECTION','THIRDPARTYLOCATION'],
        },
        partsAndSFGs : [{                // for production sections, it can be used for SFG also
            itemObjectId : {
                type: mongoose.Schema.Types.ObjectId,
                refPath: 'partsAndSFGs.model_type',
            },
            model_type : {
                type : String,
                enum: ['RM','SFGBOM'],
            },
            totalQuantity : {
                type : Number,
                default : function () {
                    return partsAndSFGs.goodQuantity
                }
            },
            goodQuantity : {
                type: Number,
            },
            isolatedQuantity : {    // sum of all isolations    ///for production this can be used for testing refirgerators under finishing line
                type: Number,
                default : 0
            },
            isolated : [{
                type : mongoose.Schema.Types.ObjectId,   //only active/OPEN isolated entries will be recorded here
                ref : 'ISOLATION'
            }]
        }]
    }],
    monthendClaimRecord : [{                        //claim to supplier (import) due to damage, defect, short, extra
        type: mongoose.Schema.Types.ObjectId,
        ref : 'CLAIMRECORD'
    }],
    sisAndPhysicalReceivePending : [{       // system has to record month end unsolved 'sis received pendnig and physical rcv pending' records.
                                            // this will also record if any defect materials sent back and waiting to receive again
                                            // for record searching it will search for anmaly/supplier issue collection   //todo anomaly collection not prepared
        type : mongoose.Schema.Types.ObjectId,
        ref : 'LOCALANOMALY'           //TODO supplierTransaction collection not prepared
    }],
    qcDeclaredDamageOrWastages : [{
        // it should come from qcDeclaredDamageOrwastage table //TODO qc defect damage collection not prepared
        //? isolated materials should not be recorded here
    }],
    consumptionInProducedFG : [{
        //? should not be completed with BOM. actual consumption should be recored on daily basis in separate collection.
        //? from there, this info will be collected.
        //? may be from SR with other useage+damage+isolation consideration.............. or by other means
    }],
    consumptionDueToInhouseServiceSection : [{
        //? this will come from daily sr 
        // part date qty         //todo need SR collection
    }],
    consumptionDueToSingerServiceSupport : [{
        // part, date, qty 
        //? from sr
    }],
    otherConsumptions : [{

    }],
    remainingPurchasePO : [{
        //? may be not needed. because, if any po is finished it will have balance of zero. so a search of non-zero po can help for query
    }],
    remainingFGproductionPO : [{
        //? may be not needed due to - same reason for purchasePO
        //todo need a productionPO collection
    }]
}, { timestamps: true })

module.exports = mongoose.model('MONTHLYCLOSING', monthlyClosingSchema)