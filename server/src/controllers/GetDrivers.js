const axios = require("axios")
const FormatDriver = require("./FormatDriver")

//* complete
const GetDrivers = async ()=> {
    try {
        const {data} = await axios.get ("http://localhost:5000/drivers")

        const driverList = data.map(driver => FormatDriver(driver) );
        
        return driverList
    } catch (error) {
        throw (error)
    }
}

module.exports = GetDrivers