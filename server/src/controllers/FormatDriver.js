const FormatDriver = (driver) => {
    let driverFormatted = {
        id:driver.id,
        name:driver.name.forename,
        surname:driver.name.surname, 
        nationality:driver.nationality,
        dob:driver.dob,
        image : driver.image.url
    }
    driver.description ? 
    driverFormatted.description = driver.description
    : driverFormatted.description = "N/A"

    let teamsArray = ["N/A"]
    driver.teams ? teamsArray = driver.teams.split(",")
    : null

    if (teamsArray.length > 1) {
        teamsArray = teamsArray.map(element => element.trim());
    }
    driverFormatted.team = teamsArray
    return driverFormatted
}

module.exports = FormatDriver