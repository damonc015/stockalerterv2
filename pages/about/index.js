import { useContext } from "react";
import Topbar from "../../components/sidebars/topbar";
import Navbar from "../../components/sidebars/navbar";
import GlobalContext from "../../store/globalProvider";

const About = () => {
  const { isNight } = useContext(GlobalContext);
  return (
    <div
      className="container"
      style={isNight ? { backgroundColor: "#141518", color: "#FAFAFA" } : null}
    >
      <Navbar />
      <div className="topContainer">
        <Topbar searchPlaceholder="Search news on a stock" page="news"></Topbar>
      </div>
    </div>
  );
};

export default About;
