const {Team} = require("../db")

const GetTeams = async () => {
    try {
        const list = await Team.findAll()
        return list

    } catch (error) {
        throw error
    }
}

module.exports = GetTeams