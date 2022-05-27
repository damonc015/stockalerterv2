import React, { useState, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { BsFillBellFill, BsFillBellSlashFill } from "react-icons/bs";
import GlobalContext from "../../store/globalProvider";
import WatchContext from "../../store/watchlistProvider";
import classes from "./Listitem.module.css";
import cloneDeep from "lodash/cloneDeep";

const Listitem = (props) => {
  const { id, index, symbol, name, price } = props;
  const { isNight } = useContext(GlobalContext);
  const { watchlist, setWatchlist, notif, setNotif, allAlerts, setAllAlerts } =
    useContext(WatchContext);

  function removeWatch(id) {
    let copyWatch = cloneDeep(watchlist);
    let x = copyWatch.filter((item) => {
      if (item.id !== id) return item;
    });
    setWatchlist(x);
  }
  function addNotif(name, symbol, id) {
    if (notif.filter((item) => item.id === id).length > 0) return;
    let copyNotif = cloneDeep(notif);
    copyNotif.push({ name, symbol, id, price: "" });
    setNotif(copyNotif);
    let copyAlert = cloneDeep(allAlerts);
    copyAlert.push({ symbol, price: "" });
    setAllAlerts(copyAlert);
  }
  function removeNotif(id) {
    let copyNotif = cloneDeep(notif);
    let x = copyNotif.filter((item) => {
      if (item.id !== id) return item;
    });
    setNotif(x);
    let copyAlerts = cloneDeep(allAlerts);
    let y = copyAlerts.filter((item) => {
      if (item.symbol !== symbol) return item;
      return;
    });
    setAllAlerts(y);
  }

  return (
    <div
      className={index % 2 !== 0 ? classes.listitem : classes.listitemAlt}
      style={
        index % 2 !== 0 ? null : isNight ? { backgroundColor: "#252525" } : null
      }
    >
      <div className={classes.listitemComp}>{`${name}${" "}(${symbol})`}</div>
      <div className={classes.listitemComp}>{price}</div>
      <div className={classes.listitemComp}>
        {notif.find((item) => item.symbol === symbol) ? (
          <BsFillBellFill
            className={classes.bell}
            onClick={() => {
              removeNotif(id);
              setWatchlist((prev) => {
                prev.forEach((item) => {
                  if (item.symbol === symbol) {
                    item.isNotif = false;
                  }
                  return;
                });
                return [...prev];
              });
            }}
          />
        ) : (
          <BsFillBellSlashFill
            className={classes.bell}
            onClick={() => {
              addNotif(name, symbol, id);
              setWatchlist((prev) => {
                prev.forEach((item) => {
                  if (item.symbol === symbol) {
                    item.isNotif = true;
                  }
                  return;
                });
                return [...prev];
              });
            }}
          />
        )}
      </div>
      <div className={classes.listitemComp}>
        <FaTrash onClick={() => removeWatch(id)}></FaTrash>
      </div>
    </div>
  );
};

export default Listitem;
