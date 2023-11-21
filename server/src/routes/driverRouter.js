const GetDriversById = require ("../controllers/GetDriversById")
const GetDrivers = require ("../controllers/GetDrivers")
const GetDriversByName = require ("../controllers/GetDriversByName")
const PostDriver = require ("../controllers/PostDriver")

const { Router } = require("express");

const driverRouter = Router();

driverRouter.post("/", async (req,res)=>{
    try {
        PostDriver(req.body)
        res.status(200).send("Posted")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

driverRouter.get("/", async (req, res) => {
    try {
        const drivers = await GetDrivers()
        
        res.status(200).send(drivers)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

driverRouter.get("/name", async (req, res) => {
    try {
        const {name} = req.query
        const drivers = await GetDriversByName(name)
        
        res.status(200).send(drivers)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

driverRouter.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const drivers = await GetDriversById(id)
        
        res.status(200).send(drivers)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = driverRouter;