
const mid1= function ( req, res, next) {
    
    let isFreeAppUser=req.headers.isfreeappuser
    
    if(!isFreeAppUser)
    {
        res.send("request is missing")
    }
    else{next()}
}

const mid2= function ( req, res, next) {
    let isFreeAppUser=req.headers.isfreeappuser
    
    if(!isFreeAppUser)
    {
        res.send("request is missing")
    }
    else{next()}
}

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

module.exports.mid1= mid1
module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4