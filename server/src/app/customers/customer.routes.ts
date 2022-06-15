import { Router } from "express";
import getHandler from "./handlers/get.handler";

const router: Router = Router();

router.route('/')
    .get(getHandler)
    //.post(postHandler);

// router.route('/:id')
//     .patch(patchHandler)
//     .delete(deleteHandler);

export default router;