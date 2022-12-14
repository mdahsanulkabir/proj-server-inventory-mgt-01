const admin = require('../firebase-config');
const USER = require('../models/userModel');


const checkAdminStatus = async (req, res, next) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1];
    try {
        const credential = await admin.auth().verifyIdToken(token);
        const adminEmail = credential.email;
        const user = await USER.findOne({userEmail : adminEmail});
        if(user.access.includes("admin")){
            console.log('hello admin');
            console.log(req.params);
            next()
            return;
        } else {
            res.status(400).json({"error":"you are not an admin"});
        }
    } catch (error) {
        res.status(400).json({error})
    }
}


// const authenticatedUser = ( req, res, next ) => {
//     admin.auth().listUsers()
//         .then(response => {
//             connectedUser = req.email;
//             console.log("at authenticatedUser middleware, logged in user email is ->  ",connectedUser);

//             const user = [];
//             response.users.forEach((userRecord) => {
//                 user.push(userRecord.toJSON().email)
//             })
//             // console.log(user);
//             const email = user.find(userDB => userDB === connectedUser)
//             console.log(email, "  -> email is found in user list");
            
//             next()
//         })
// }

module.exports = {
    checkAdminStatus,
}