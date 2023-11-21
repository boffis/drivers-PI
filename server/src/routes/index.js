const { Router } = require("express");
const driverRouter = require("./driverRouter")
const GetTeams = require ("../controllers/GetTeams")

const router = Router();

router.use("/drivers", driverRouter)

router.get("/teams", async (req,res) => {
    try {
        const list = await GetTeams()
        res.status(200).send(list)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
module.exports = router;
