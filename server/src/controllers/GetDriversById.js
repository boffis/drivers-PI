const axios = require ("axios")
const FormatDriver = require("./FormatDriver")

//todo incomplete
const GetDriversById = async (id) =>{
    try {
        if (isNaN(id)){
            
        } else {
            const {data} = await axios.get(`http://localhost:5000/drivers/${id}`)
            
            return FormatDriver(data)
        }
    } catch (error) {
        throw (error)
    }
}

module.exports = GetDriversById