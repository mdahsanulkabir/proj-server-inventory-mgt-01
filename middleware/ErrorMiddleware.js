const errorMiddleware = ( err, req, res, next ) => {
    console.log(err);
    res.status(500).send( "There was a server side error" );
}

module.exports = errorMiddleware;