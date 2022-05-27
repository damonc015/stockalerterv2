import { useContext } from "react";
import Notificationitem from "./Notificationitem";
import WatchContext from "../../store/watchlistProvider";
import classes from "./notifications.module.css";
import GlobalContext from "../../store/globalProvider";

const Notifcations = () => {
  const { isNight } = useContext(GlobalContext);
  const { notif } = useContext(WatchContext);

  if (!notif || notif.length == 0) {
    return (
      <div className={classes.notifcationContainer}>
        <div
          className={classes.notifSubContainer}
          style={isNight ? { color: "white" } : null}
        >
          <div className={classes.notifTitle}>
            <h2>Notifications</h2>
          </div>
          <div style={{ paddingLeft: "1 rem" }}>
            No notifications set up yet.
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.notifcationContainer}>
      <div className={classes.notifSubContainer}>
        <div className={classes.notifTitle}>
          <h2>Notifications</h2>
        </div>
        {notif.map((item, index) => {
          return (
            <Notificationitem
              name={item.name}
              symbol={item.symbol}
              index = {index}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notifcations;
