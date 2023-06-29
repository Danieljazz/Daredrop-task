import "./newStreamerForm.scss";

const NewStreamerForm = () => {
  return (
    <div className="new-streamer-form">
      <h1>Add new streamer</h1>
      <form>
        <div className="first-row-form">
          <label for="name">Name</label>
          <input id="name" />
          <label for="platform">Platform</label>
          <select id="platform">
            <option value="Twitch">Twitch</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Youtube">Youtube</option>
          </select>
        </div>
        <label for="description">Description</label>
        <textarea id="description" />
        <div className="submit-section">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default NewStreamerForm;
