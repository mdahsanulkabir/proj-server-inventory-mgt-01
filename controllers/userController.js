const USER = require('../models/userModel');
const admin = require('../firebase-config');

const getUserList = () => {
  const user = [];
  admin.auth().listUsers()
      .then(response => {
          
          response.users.forEach((userRecord) => {
              user.push(userRecord.toJSON())
          })
          return user;
      })
  
}

// ? get all users from Firebase 
const getUsers = ( req, res ) => {
  const listedUsers = [];
  admin.auth().listUsers()
  .then(response => {
    response.users.forEach((userRecord) => {
      listedUsers.push(userRecord.toJSON())
      // listedUsers.forEach(listedUser => console.log(listedUser.email))
    })
    const myUsers = listedUsers.map(listedUser => {
      return {
        email: listedUser.email, 
        uid: listedUser.uid,
        displayName: listedUser.displayName,
        emailVerified: listedUser.emailVerified,
        phoneNumber: listedUser.phoneNumber,
        photoURL: listedUser.photoURL,
        disabled: listedUser.disabled,
      }
    })
    res.status(200).json(myUsers)
  })
}

//update user credentials
const updateUser = async ( req, res ) => {
    
    console.log(req.body);
    const { uid, email, phoneNumber, emailVerified, displayName, disabled } = req.body;

    admin.auth().updateUser(uid, {
      email, phoneNumber, disabled, displayName, emailVerified
    })
    .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully updated user', userRecord.toJSON());
    res.status(200).json(userRecord);
    })
    .catch((error) => {
      console.log('Error updating user:', error);
      res.status(400).json({ error: error.message });
    });
}

// update user access
const updateUserAccess = async ( req, res ) => {
  const { email, access} = req.body;

  console.log("in coming data : ", email, access);

  try {
    const newuserAccess = await USER.findOneAndUpdate(
      { userEmail: email },
      { access} , { new: true }
    );
    console.log(newuserAccess);
    res.status(200).json(newuserAccess);
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
    updateUser,
    getUsers,
    updateUserAccess
}