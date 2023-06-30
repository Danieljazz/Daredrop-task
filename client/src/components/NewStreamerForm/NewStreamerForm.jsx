import "./newStreamerForm.scss";
import { useState } from "react";

const NewStreamerForm = () => {
  const [newStreamer, setNewStreamer] = useState({ platform: "Twitch" });
  const handlerChange = (e) => {
    const target = e.target;
    setNewStreamer((prev) => ({ ...prev, [target.id]: target.value }));
  };
  const addNewStreamer = (e) => {
    e.preventDefault();
    console.log(newStreamer);
  };

  return (
    <div className="new-streamer-form">
      <h1>Add new streamer</h1>
      <form>
        <div className="first-row-form">
          <label htmlFor="name">Name</label>
          <input id="name" onChange={handlerChange} value={newStreamer.name} />
          <label htmlFor="platform">Platform</label>
          <select id="platform" onChange={handlerChange}>
            <option value="Twitch">Twitch</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Youtube">Youtube</option>
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
      </form>
    </div>
  );
};
export default NewStreamerForm;
