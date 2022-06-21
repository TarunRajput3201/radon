let axios = require("axios")
let getWeather = async function (req, res) {

    try {
        let city = req.query.q
        let appid=req.query.appid


        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getOnlyTemperature = async function (req, res) {

    try {
        let city = req.query.q
        let appid=req.query.appid


        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        let reqData=data.main.temp
        res.status(200).send({ msg: reqData, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getSortedCities = async function (req, res) {

    try {
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[]
        for(let i=0; i<cities.length; i++)
        {
            let obj={city:cities[i]}
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c67d015cd82213bd861c0c80afd77569`
            }
            let resp = await axios(options);
         obj.temp=resp.data.main.temp
         cityObjArray.push(obj)

        }
         let sorted=cityObjArray.sort(function(a,b){return a.temp - b.temp})


        
        console.log(sorted)
        
        res.status(200).send({  status: true, msg: sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getWeather=getWeather
module.exports.getOnlyTemperature=getOnlyTemperature
module.exports.getSortedCities=getSortedCities