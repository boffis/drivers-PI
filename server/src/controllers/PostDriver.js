const {Driver, Team} = require("../db")

//ToDo to check
const PostDriver = async (driver) => {
    try {
        const {name, surname, description, image, nationality, dob, team} = driver

        let TeamArray = []

        for (const teamName of team ) {
            const teamModel = await Team.findOne({where:{name:teamName}})
            TeamArray.push(teamModel)
        }

        const driverModel = await Driver.create({name,surname,description,image,nationality,dob})

        await driverModel.addTeams(TeamArray)

    } catch (error) {
        throw error
    }
}

module.exports = PostDriver