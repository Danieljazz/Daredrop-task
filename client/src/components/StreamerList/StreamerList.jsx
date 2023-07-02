import "./streamerList.scss";
import { useEffect, useState } from "react";
import { makeRequest } from "../../createRequest";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
const StreamerList = ({ socket }) => {
  const userId = JSON.parse(localStorage.getItem("userId"));

  const [streamerList, setStreamerList] = useState([]);
  const [likedStreamers, setLikedStreamers] = useState([]);

  const [streamerListError, setStreamerListError] = useState(null);
  const [likedStreamersError, setLikedStreamersError] = useState(null);
  const [voteError, setVoteError] = useState(null);

  useEffect(() => {
    makeRequest
      .get("/streamers")
      .then((res) => setStreamerList(res.data))
      .catch((e) => setStreamerListError(e.response.data));
    makeRequest
      .get(`/streamers/votes/${userId}`)
      .then((res) => setLikedStreamers(res.data))
      .catch((e) => setLikedStreamersError(e.response.data));
  }, []);
  useEffect(() => {
    socket?.on("db_update_response", () => {
      console.log("new udpate is waiting");
      makeRequest
        .get("/streamers")
        .then((res) => {
          setStreamerList(res.data);
        })
        .catch((e) => setStreamerListError(e.response.data));
      makeRequest
        .get(`/streamers/votes/${userId}`)
        .then((res) => setLikedStreamers(res.data))
        .catch((e) => setLikedStreamersError(e.response.data));
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
        .then(() => socket.emit("db_update"))
        .catch((e) => setVoteError(e.response.data));
    } else {
      makeRequest
        .put(`/streamers/${streamerId}/vote`, { userId, voteType })
        .then(() => socket.emit("db_update"))
        .catch((e) => setVoteError(e.response.data));
    }
  };

  return (
    <div className="streamer-list">
      <div>
        {streamerListError && (
          <ErrorNotification
            errorMessage={streamerListError}
            closeModal={setStreamerListError}
          />
        )}
        {likedStreamersError && (
          <ErrorNotification
            errorMessage={likedStreamersError}
            closeModal={setLikedStreamersError}
          />
        )}
        {voteError && (
          <ErrorNotification
            errorMessage={voteError}
            closeModal={setVoteError}
          />
        )}
      </div>
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
