import { Router } from "express";
import AdomanyController from "../controllers/Adomany.controller.js";

const AdomanyRouter = Router();

AdomanyRouter.put("/donation", AdomanyController.adomanyPut);
AdomanyRouter.get("/donation/:id", AdomanyController.adomanyGet);
AdomanyRouter.patch("/donation/:id", AdomanyController.adomanyPatch);
AdomanyRouter.delete("/donation/:id", AdomanyController.adomanyDelete);

export default AdomanyRouter;
