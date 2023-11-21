const axios = require ("axios")
const FormatDriver = require("./FormatDriver")

//todo incomplete ADD DB CHECKS
const GetDriversByName = async (name) => {
    try {
            let driverList = []

            const {data} = await axios.get(`http://localhost:5000/drivers`)
            
            for (const driver of data) {
                if (driverList.length<=15 && driver.name.forename.toUpperCase().includes(name.toUpperCase())){
                    driverList.push(FormatDriver(driver))
                }
            }
            return driverList

    } catch (error) {
        throw error
    }
}

module.exports = GetDriversByName