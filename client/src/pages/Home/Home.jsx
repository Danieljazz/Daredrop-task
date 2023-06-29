import Navbar from "../../components/Navbar/Navbar";
import NewStreamerForm from "../../components/NewStreamerForm/NewStreamerForm";
import StreamerList from "../../components/StreamerList/StreamerList";
import "./home.scss";
const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="main-content">
        <NewStreamerForm />
        <StreamerList />
      </div>
    </div>
  );
};

export default Home;
