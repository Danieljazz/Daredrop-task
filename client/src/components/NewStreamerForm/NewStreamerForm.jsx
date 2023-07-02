import "./newStreamerForm.scss";
import { makeRequest } from "../../createRequest";
import { useState } from "react";

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
    setFormError(null);
    const requiredInputs = ["name", "platform", "description"];
    let missingKey = requiredInputs.filter(
      (input) => !Object.keys(newStreamer).includes(input)
    );
    if (missingKey.length > 0) {
      setFormError(missingKey);
    } else {
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
        .catch((e) => setPostError(e.response.data));
    }
  };
  console.log(postError);
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
        {postError && <div style={{ color: "red" }}>{`${postError}`}</div>}
        {formError && (
          <div style={{ color: "red" }}>
            <span>{`Missing required inputs: ${formError}`}</span>
          </div>
        )}
      </form>
    </div>
  );
};
export default NewStreamerForm;
