import "./streamerList.scss";

const StreamerList = () => {
  return (
    <div className="streamer-list">
      <ul>
        <a
          href="/streamers/1"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li>
            <span>Ninja</span>
            <div className="vote-section">
              <i class="las la-angle-up"></i>
              <span>2000</span>
              <i class="las la-angle-down"></i>
            </div>
          </li>
        </a>
        <a
          href="/streamers/1"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li>
            <span>Ninja</span>
            <div className="vote-section">
              <i class="las la-angle-up"></i>
              <span>2000</span>
              <i class="las la-angle-down"></i>
            </div>
          </li>
        </a>
        <li>
          <span>Ninja</span>
          <div className="vote-section">
            <i class="las la-angle-up"></i>
            <span>2000</span>
            <i class="las la-angle-down"></i>
          </div>
        </li>{" "}
        <li>
          <span>Ninja</span>
          <div className="vote-section">
            <i class="las c"></i>
            <span>2000</span>
            <i class="las la-angle-down"></i>
          </div>
        </li>{" "}
        <li>
          <span>Ninja</span>
          <div className="vote-section">
            <i class="las la-angle-up"></i>
            <span>2000</span>
            <i class="las la-angle-down"></i>
          </div>
        </li>{" "}
        <li>
          <span>Ninja</span>
          <div className="vote-section">
            <i class="las la-angle-up"></i>
            <span>2000</span>
            <i class="las la-angle-down"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StreamerList;
