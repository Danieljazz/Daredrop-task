import { db } from "../db_connection.js";

export const newStreamer = (req, res) => {
  let q = "SELECT * FROM streamers WHERE name=? AND platform=?";
  const newStreamerData = [
    req.body.name,
    req.body.description,
    req.body.platform,
  ];
  try {
    let stmt = db.prepare(q);
    const data = stmt.get([req.body.name, req.body.platform]);
    if (data) return res.status(409).json("Streamer already exists");
    q = "INSERT INTO streamers(name, description, platform) VALUES (?, ?, ?)";
    stmt = db.prepare(q);
    stmt.run(...newStreamerData);
    q =
      "INSERT INTO votes(streamerId, userId, vote) SELECT id, 0, 0 FROM streamers AS s WHERE NOT EXISTS (SELECT * FROM votes WHERE votes.streamerId=s.id)";
    stmt = db.prepare(q);
    stmt.run();
    res.status(201).json("New streamer has been added");
  } catch (e) {
    res.status(500).json(`Cannot add new streamer \n ${e}`);
  }
};
export const allStreamers = (req, res) => {
  const q =
    "SELECT streamers.id as sid, name, description, platform, img, SUM(vote) as votes FROM streamers LEFT JOIN votes ON(streamerId=sid) GROUP BY streamerId ORDER BY SUM(vote) DESC";
  try {
    const stmt = db.prepare(q);
    const data = stmt.all();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(`There is a db problem \n ${e}`);
  }
};
export const specificStreamer = (req, res) => {
  const q =
    "SELECT streamers.id as sid, name, description, platform, img, SUM(vote) as votes FROM streamers LEFT JOIN votes ON(streamerId=sid) WHERE streamerId=?";
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
    q =
      "INSERT INTO votes(streamerId, userId, vote) VALUES(?, ?, 1) ON CONFLICT(streamerId, userId) DO UPDATE SET vote=1";
  } else if (req.body.voteType === "downvote") {
    q =
      "INSERT INTO votes(streamerId, userId, vote) VALUES(?, ?, -1) ON CONFLICT(streamerId, userId) DO UPDATE SET vote=-1";
  } else {
    return res.status(500).json("Wrong vote type");
  }
  try {
    const stmt = db.prepare(q);
    stmt.run([req.params.streamerId, req.body.userId]);
  } catch (e) {
    return res.status(500).json(e);
  }
  try {
    const voteQuery = "SELECT SUM(vote) as votes from votes where streamerId=?";
    const stmt = db.prepare(voteQuery);
    const voteCount = stmt.get(req.params.streamerId);
    res.status(200).json(voteCount);
  } catch (e) {
    return res.status(500).json("Cannot receive vote count");
  }
};

export const deleteVote = (req, res) => {
  const q = "DELETE FROM votes WHERE streamerId=? AND userId=?";
  try {
    const stmt = db.prepare(q);
    stmt.run([req.params.streamerId, req.params.userId]);
    res.status(200).json(`Vote for deleted ${req.params.streamerId}`);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const userVotes = (req, res) => {
  const q = "SELECT * FROM votes WHERE userId=?";
  try {
    const stmt = db.prepare(q);
    const votes = stmt.all(req.params.userId);
    res.status(200).json(votes);
  } catch (e) {
    res.status(500).json(e);
  }
};
