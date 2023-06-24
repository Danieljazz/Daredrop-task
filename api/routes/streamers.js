import { Router } from "express";
import {
  newStreamer,
  allStreamers,
  specificStreamer,
  newVote,
} from "../controllers/streamers.js";
const router = Router();

router.post("/", newStreamer);
router.get("/", allStreamers);
router.get("/:streamerId", specificStreamer);
router.put("/:streamerId/vote", newVote);

export default router;
