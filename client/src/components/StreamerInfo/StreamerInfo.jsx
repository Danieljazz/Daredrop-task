import "./streamerInfo.scss";

const StreamerInfo = () => {
  const streamerData = {
    id: 1,
    name: "IZakoo",
    description: "CSGO",
    platform: "Twitch",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png",
  };
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
