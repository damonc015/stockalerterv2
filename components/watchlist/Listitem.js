import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import GlobalContext from "../../store/globalProvider";
import WatchContext from "../../store/watchlistProvider";
import classes from "./Listitem.module.css";

const Listitem = (props) => {
  const { id, index, symbol, name, price } = props;
  const { isNight } = useContext(GlobalContext);
  const { watchlist, setWatchlist } = useContext(WatchContext);

  function removeWatch(id) {
    let copyWatch = [...watchlist];
    let x = copyWatch.filter((item) => {
      if (item.id !== id) return item;
    });
    setWatchlist(x);
  }

  return (
    <div
      className={index % 2 !== 0 ? classes.listitem : classes.listitemAlt}
      style={
        index % 2 !== 0 ? null : isNight ? { backgroundColor: "#252525" } : null
      }
    >
      <div className={classes.listitemComp}>{name}</div>
      <div className={classes.listitemComp}>{symbol}</div>
      <div className={classes.listitemComp}>{price}</div>
      <div>
        <FaTrash onClick={() => removeWatch(id)}></FaTrash>
      </div>
    </div>
  );
};

export default Listitem;
