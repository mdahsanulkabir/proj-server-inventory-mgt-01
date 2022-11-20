const { abi } = require('./data')

const admin = require('../firebase-config');
//create test post
const createTestPost = async (req, res) => {
    const he = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const decodedValue = await admin.auth().verifyIdToken(token);
    console.log(decodedValue);
}


module.exports = {
    createTestPost
}