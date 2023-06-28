import "./newStreamerForm.scss";

const NewStreamerForm = () => {
  return (
    <form className="new-streamer-form">
      <label for="name">Hi</label>
      <input id="name" />
      <select>
        <option value="Twitch">Twitch</option>
        <option value="Tiktok">Tiktok</option>
        <option value="Youtube">Youtube</option>
      </select>
      <input />
      <button>Submit</button>
    </form>
  );
};
export default NewStreamerForm;
