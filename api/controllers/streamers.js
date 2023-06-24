import { db } from "../db_connection.js";

export const newStreamer = (req, res) => {
  const q =
    "INSERT INTO streamers(name, description, platform, votes, img) VALUES (?, ?, ?, ?, ?)";
  const defaultPhoto =
    "https://cdn-icons-png.flaticon.com/512/44/44948.png?w=826&t=st=1687617160~exp=1687617760~hmac=https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png";
  const newStreamerData = [
    req.body.name,
    req.body.description,
    req.body.platform,
    0,
    defaultPhoto,
  ];
  try {
    const stmt = db.prepare(q);
    stmt.run(...newStreamerData);
    res.status(201).json("New streamer has been added");
  } catch (e) {
    res.status(500).json(`Cannot add new streamer \n ${e}`);
  }
};
export const allStreamers = (req, res) => {
  const q = "SELECT * FROM streamers";
  try {
    const stmt = db.prepare(q);
    const data = stmt.get();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(`There is a db problem \n ${e}`);
  }
};
export const specificStreamer = (req, res) => {
  const q = "SELECT * FROM streamers WHERE id=?";
  try {
    const stmt = db.prepare(q);
    const streamerData = stmt.get(req.params.streamerId);
    res.status(200).json(streamerData);
  } catch (e) {
    res.status(500).json(`Cannot get streamer \n e`);
  }
};
export const newVote = (req, res) => {
  let q = "";
  if (req.body.voteType === "upvote") {
    q = "UPDATE streamers SET votes=votes+1 WHERE id=?";
  } else if (req.body.voteType === "downvote") {
    q = "UPDATE streamers SET votes=votes-1 WHERE id=? ";
  } else {
    return res.status(500).json("Wrong vote type");
  }
  try {
    const stmt = db.prepare(q);
    stmt.run(req.params.streamerId);
  } catch (e) {
    return res.status(500).json("Cannot change vote count");
  }
  try {
    const voteQuery = "SELECT votes FROM streamers WHERE id=?";
    const stmt = db.prepare(voteQuery);
    const voteCount = stmt.get(req.params.streamerId);
    res.status(200).json(voteCount);
  } catch (e) {
    return res.status(500).json("Cannot receive vote count");
  }
};
