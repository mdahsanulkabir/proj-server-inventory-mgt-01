const admin = require('../firebase-config')


const getUserToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const credential = await admin.auth().verifyIdToken(token);
    console.log("at getUserToken middleware, logged in user email is ->  ", credential.email);
    req.email = credential.email;
    next()
}


const authenticatedUser = ( req, res, next ) => {
    admin.auth().listUsers()
        .then(response => {
            connectedUser = req.email;
            console.log("at authenticatedUser middleware, logged in user email is ->  ",connectedUser);

            const user = [];
            response.users.forEach((userRecord) => {
                user.push(userRecord.toJSON().email)
            })
            // console.log(user);
            const email = user.find(useDB => useDB === connectedUser)
            console.log(email, "  -> email is found in user list");
            
            next()
        })
}

module.exports = {
    authenticatedUser,
    getUserToken
}