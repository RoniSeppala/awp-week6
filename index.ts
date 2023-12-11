import express, {Express, Request, Response} from "express"
import { Vehicle } from "./models/Vehicle";

const app: Express = express();
const port: number = 3000;

let vehicles: Vehicle[] = [];

app.use(express.json())

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello world")
})

app.post("/vehicle/add", (req: Request, res: Response) => {
    try {
        const newVehicle: Vehicle = {
            model: req.body.model,
            color: req.body.color,
            year: req.body.year,
            power: req.body.power
        }

        if (req.body.bodyType !== undefined){
            newVehicle.bodyType = req.body.bodyType
        }
        if (req.body.wheelCount !== undefined){
            newVehicle.wheelCount = req.body.wheelCount
        }
        if (req.body.draft !== undefined){
            newVehicle.draft = req.body.draft
        }
        if (req.body.wingspan !== undefined){
            newVehicle.wingspan = req.body.wingspan
        }

        vehicles.push(newVehicle)

        res.status(201).send("Vehicle added")
    } catch (error) {
        res.status(500).send("an error ocured")
    }
})

app.listen(port, () => {
    console.log("server running")
})