const USER = require('../models/userModel');
const admin = require('../firebase-config')

//update user
const updateUser = async ( req, res ) => {
    const { userEmail, access } = req.body;


    try {
        const newUser = await USER.create({
            userEmail , access
        })
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//create new user
const createNewUser = async ( req, res ) => {
    const { userEmail, password  } = req.body;


    admin.auth().createUser({
    email: userEmail,
    emailVerified: false,
    password: password,
    // displayName: userEmail.split('@')[0],
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });
}

module.exports = {
    createNewUser,
    updateUser
}