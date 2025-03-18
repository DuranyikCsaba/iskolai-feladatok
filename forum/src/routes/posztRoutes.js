import { Router } from "express";
import posztController from "../controllers/posztController.js";

const PosztRouter = Router();

PosztRouter.put("/poszt", posztController.PosztPut);
PosztRouter.get("/poszt", posztController.PosztGet);
PosztRouter.delete("/poszt/:id", posztController.PosztIdDelete);
PosztRouter.patch("/poszt/:id", posztController.PosztIdPatch);
PosztRouter.get("/poszt/:id", posztController.PosztIdGet);

export default PosztRouter;