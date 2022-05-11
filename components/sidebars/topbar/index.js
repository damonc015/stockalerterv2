import Searchbar from "./Searchbar";
import Night from "./Night";
import classes from "./index.module.css";
import GlobalContext from "../../../store/globalProvider";
import { useContext } from "react";

const Topbar = (props) => {
  const {searchPlaceholder,page} = props;
  const globalCtx = useContext(GlobalContext);
  return (
    <div
      className={classes.container}
      style={
        globalCtx.isNight
          ? { backgroundColor: "rgb(66,66,66)", color: "#FAFAFA" }
          : null
      }
    >
      <Searchbar placeholder={searchPlaceholder} page={page}></Searchbar>
      <Night></Night>
    </div>
  );
};

export default Topbar;
