const admin = require('./firebase-config')

const authenticatedUser = ( req, res, next )
admin.auth().listUsers()
    .then(response => {
        const user = []

        response.users.find()

        // response.users.forEach((userRecord) => {
        //     user.push({uid : userRecord.toJSON().uid, email : userRecord.toJSON().email})
        // })
        // console.log(user);
    })