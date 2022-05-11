import { useContext } from "react";
import { Oval } from "react-loader-spinner";
import Navbar from "../../components/sidebars/navbar";
import Topbar from "../../components/sidebars/topbar";
import GlobalContext from "../../store/globalProvider";

const index = () => {
  const { isNight } = useContext(GlobalContext);
  return (
    <div
      className="container"
      style={isNight ? { backgroundColor: "#141518", color: "#FAFAFA" } : null}
    >
      <Navbar />
      <div className="topContainer">
        <Topbar searchPlaceholder="Search news on a stock" page="news"></Topbar>
        <div style={{ height: "92vh", display: "flex", alignItems: "center" }}>
          <Oval color="#00b075" height={80} width={80} />
        </div>
      </div>
    </div>
  );
};

export default index;
