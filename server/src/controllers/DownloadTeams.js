const axios = require ("axios")
const {Team} = require("../db")

const DownloadTeams = async () => {
    try {
        const {data} = await axios.get(`http://localhost:5000/drivers`)
        const allTeams = []
        const allTeamsObj = []
        for (const driver of data) {
            let teamsArray = []
            driver.teams ? teamsArray = driver.teams.split(",")
            : null
            
            
            
            if (teamsArray.length > 0){
                teamsArray = teamsArray.map(element => element.trim())};
                for (const team of teamsArray) {
                    if (!allTeams.includes(team)){
                        allTeams.push(team)
                        allTeamsObj.push({name:team})
                    }
                }
            }
        await Team.bulkCreate(allTeamsObj)
        console.log("SUCCESFULLY DOWNLOADED TEAMS")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = DownloadTeams