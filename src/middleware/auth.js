const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token

    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise