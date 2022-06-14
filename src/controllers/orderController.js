const { count } = require("console")
const orderModel= require("../models/orderModel")

const createOrder= async function (req, res) {
    let data = req.body
        // if (!validator.isValidRequestBody(data))
    let userId = data.userId
    if(!userId) {res.send({msg: 'UserId is mandatory in the request'})}
    let productId= data.productId
    if(!productId) {res.send({msg: 'ProductId is mandatory in the request'})}
    else{
    let savedData= await orderModel.create(data)
    res.send({data: savedData})}
}

module.exports.createOrder= createOrder
