import List from "./list";
import Sortmenu from "./Sortmenu";
import classes from "./index.module.css";
import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../store/globalProvider";

const index = () => {
  const { isNight } = useContext(GlobalContext);

  return (
    <div className={classes.container}>
      <div
        className={classes.listContainer}
        style={isNight ? { backgroundColor: "rgb(66,66,66)" } : null}
      >
        <div className={classes.title}>
          <h2>Watchlist</h2>
        </div>
        <Sortmenu />
        <List />
      </div>
    </div>
  );
};

export default index;
