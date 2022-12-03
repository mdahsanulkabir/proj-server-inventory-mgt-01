const admin = require('../firebase-config')
const USER = require ('../models/userModel')



//? it will get the connected user's auth token from front end,
//? then verify the token from firebase and provide the connected
//? user's verifed email address. then move to next middle ware
const getUserToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const credential = await admin.auth().verifyIdToken(token);
    console.log("at getUserToken middleware, logged in user email is ->  ", credential.email);
    req.body.credential = credential;
    
    next()
}



//? it will pull all the users' records from firebase, then put their email id in an array
//? then it will show the email address of the connected user and move to next middleware
const authenticatedUser = async ( req, res, next ) => {

    const credential = req.body.credential;
    try {
        const user = await USER.findOne({userEmail : credential.email})
        const access = user.access;
        req.body.access = access;
        next()
        return;

    } catch (error ) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    authenticatedUser,
    getUserToken
}