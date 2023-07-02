import "./streamerList.scss";
import { useEffect, useState } from "react";
import { makeRequest } from "../../createRequest";

const StreamerList = ({ socket }) => {
  const userId = JSON.parse(localStorage.getItem("userId"));

  const [streamerList, setStreamerList] = useState([]);
  const [likedStreamers, setLikedStreamers] = useState([]);
  useEffect(() => {
    makeRequest.get("/streamers").then((res) => setStreamerList(res.data));
    makeRequest
      .get(`/streamers/votes/${userId}`)
      .then((res) => setLikedStreamers(res.data));
  }, []);

  useEffect(() => {
    socket?.on("db_update_response", () => {
      console.log("new udpate is waiting");
      makeRequest.get("/streamers").then((res) => {
        setStreamerList(res.data);
      });
      makeRequest
        .get(`/streamers/votes/${userId}`)
        .then((res) => setLikedStreamers(res.data));
    });
  }, [socket]);
  const voteHandler = (voteType, streamerId) => {
    if (
      (voteType === "upvote" &&
        likedStreamers.find(
          (likedStreamer) =>
            likedStreamer.streamerId === streamerId && likedStreamer.vote === 1
        )) ||
      (voteType === "downvote" &&
        likedStreamers.find(
          (likedStreamer) =>
            likedStreamer.streamerId === streamerId && likedStreamer.vote === -1
        ))
    ) {
      makeRequest
        .delete(`/streamers/${streamerId}/vote/${userId}`)
        .then(() => socket.emit("db_update"));
    } else {
      makeRequest
        .put(`/streamers/${streamerId}/vote`, { userId, voteType })
        .then(() => socket.emit("db_update"));
    }
  };

  return (
    <div className="streamer-list">
      <ul>
        {streamerList.map((streamer) => (
          <li key={streamer.sid}>
            <a
              href={`/streamers/${streamer.sid}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <span>{streamer.name}</span>
            </a>
            <div className="vote-section">
              <i
                className="las la-angle-up"
                name="upvote"
                onClick={() => voteHandler("upvote", streamer.sid)}
                style={{
                  color: likedStreamers.find(
                    (likedStreamer) =>
                      likedStreamer.streamerId === streamer.sid &&
                      likedStreamer.vote === 1
                  )
                    ? "#39ff14"
                    : "white",
                }}
              ></i>
              <span>{Number(streamer.votes)}</span>
              <i
                className="las la-angle-down"
                name="downvote"
                onClick={() => voteHandler("downvote", streamer.sid)}
                style={{
                  color: likedStreamers.find(
                    (likedStreamer) =>
                      likedStreamer.streamerId === streamer.sid &&
                      likedStreamer.vote === -1
                  )
                    ? "#ff1818"
                    : "white",
                }}
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamerList;
