import { Router } from "express";
import {
  newStreamer,
  allStreamers,
  specificStreamer,
  newVote,
  deleteVote,
  userVotes,
} from "../controllers/streamers.js";
const router = Router();

router.post("/", newStreamer);
router.get("/", allStreamers);
router.get("/:streamerId", specificStreamer);
router.put("/:streamerId/vote", newVote);
router.delete("/:streamerId/vote", deleteVote);
router.get("/votes/:userId", userVotes);
export default router;
