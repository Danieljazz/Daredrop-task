import Navbar from "../../components/Navbar/Navbar";
import NewStreamerForm from "../../components/NewStreamerForm/NewStreamerForm";
import "./home.scss";
const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="main-content">
        <NewStreamerForm />
        <div>Hi form home</div>
      </div>
    </div>
  );
};

export default Home;
