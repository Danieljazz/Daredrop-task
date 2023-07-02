import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" style={{ textDecoration: "none" }}>
        <div className="logo">Dare2Stream</div>
      </a>
      <button>
        <a href="/" style={{ textDecoration: "none" }}>
          <i className="las la-home"></i>
        </a>
      </button>
    </div>
  );
};

export default Navbar;
