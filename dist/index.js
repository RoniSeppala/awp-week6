"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
let vehicles = [];
app.use(express_1.default.json());
app.get("/hello", (req, res) => {
    res.send("Hello world");
});
app.post("/vehicle/add", (req, res) => {
    try {
        const newVehicle = {
            model: req.body.model,
            color: req.body.color,
            year: req.body.year,
            power: req.body.power
        };
        if (req.body.bodyType !== undefined) {
            newVehicle.bodyType = req.body.bodyType;
        }
        if (req.body.wheelCount !== undefined) {
            newVehicle.wheelCount = req.body.wheelCount;
        }
        if (req.body.draft !== undefined) {
            newVehicle.draft = req.body.draft;
        }
        if (req.body.wingspan !== undefined) {
            newVehicle.wingspan = req.body.wingspan;
        }
        vehicles.push(newVehicle);
        console.log(vehicles);
        res.status(201).send("Vehicle added");
    }
    catch (error) {
        res.status(500).send("an error ocured");
    }
});
app.get("/vehicle/search/:model", (req, res) => {
    const searchterm = req.params.model;
    const foundVehcile = vehicles.find(vehicle => vehicle.model === searchterm);
    if (foundVehcile) {
        res.send(foundVehcile);
    }
    else {
        res.status(404).send("Vehcile not found");
    }
});
app.listen(port, () => {
    console.log("server running");
});
