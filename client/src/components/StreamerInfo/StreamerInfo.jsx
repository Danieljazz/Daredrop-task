import { useParams } from "react-router-dom";
import "./streamerInfo.scss";
import { useEffect, useState } from "react";
import { makeRequest } from "../../createRequest";

const StreamerInfo = () => {
  const { streamerId } = useParams();
  const [streamerData, setStreamerData] = useState({});
  useEffect(() => {
    makeRequest.get(`/streamers/${streamerId}`).then((res) => {
      setStreamerData(res.data);
    });
  }, []);

  return (
    <div className="streamer-info">
      <img src={streamerData.img} />
      <div className="streamer-data">
        <span>Name: {streamerData.name}</span>
        <span>Platform: {streamerData.platform}</span>
      </div>
      <div className="streamer-desc">
        <div>
          <span>Description</span>
        </div>
        <span>{streamerData.description}</span>
      </div>
    </div>
  );
};

export default StreamerInfo;
