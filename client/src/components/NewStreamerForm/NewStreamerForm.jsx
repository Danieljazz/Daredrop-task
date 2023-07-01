import "./newStreamerForm.scss";
import { makeRequest } from "../../createRequest";
import { useState } from "react";
import axios from "axios";

const NewStreamerForm = ({ socket }) => {
  const [newStreamer, setNewStreamer] = useState({ platform: "Twitch" });
  const [formError, setFormError] = useState();
  const [postError, setPostError] = useState();

  const handlerChange = (e) => {
    const target = e.target;
    setNewStreamer((prev) => ({ ...prev, [target.id]: target.value }));
  };
  const addNewStreamer = (e) => {
    e.preventDefault();
    setPostError(null);
    console.log(newStreamer);
    makeRequest
      .post("/streamers", {
        name: newStreamer.name,
        platform: newStreamer.platform,
        description: newStreamer.description,
      })
      .then(() => {
        socket.emit("db_update");
        setNewStreamer({ name: "", platform: "Twitch", description: "" });
      })
      .catch((e) => setPostError(e));
    // socket.on("db_update_response", () => {
    //   console.log("new data available for form");
    // });
    // axios.get("http://localhost:8080/api/v1/streamers");
  };
  return (
    <div className="new-streamer-form">
      <h1>Add new streamer</h1>
      <form>
        <div className="first-row-form">
          <label htmlFor="name">Name</label>
          <input id="name" onChange={handlerChange} value={newStreamer.name} />
          <label htmlFor="platform">Platform</label>
          <select
            id="platform"
            onChange={handlerChange}
            value={newStreamer.platform}
          >
            <option value="Twitch">Twitch</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Youtube">Youtube</option>
            <option value="Kick">Kick</option>
            <option value="Rumble">Rumble</option>
          </select>
        </div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          onChange={handlerChange}
          value={newStreamer.description}
        />
        <div className="submit-section" onClick={addNewStreamer}>
          <button>Submit</button>
        </div>
        {postError && (
          <div style={{ color: "red" }}>Smth went wrong cannot post </div>
        )}
      </form>
    </div>
  );
};
export default NewStreamerForm;
