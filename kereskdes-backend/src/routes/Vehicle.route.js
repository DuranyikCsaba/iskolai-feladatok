import { Router } from "express"
import VehicleController from "../controllers/Vehicle.controller.js"

const VehicleRouter = Router();

VehicleRouter.put("/vehicle", VehicleController.VehiclePut);
VehicleRouter.get("/vehicle/:id", VehicleController.VehicleIdGet);
VehicleRouter.patch("/vehicle/:id", VehicleController.VehicleIdPatch);
VehicleRouter.delete("/vehicle:id", VehicleController.VehicleIdDelete);
VehicleRouter.get("/vehicles", VehicleController.VehiclesGet);
VehicleRouter.post("/vehicles", VehicleController.VehiclesPost);

export default VehicleRouter;