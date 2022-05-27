import { useState, useEffect, useContext } from "react";
import classes from "./notifitem.module.css";
import WatchContext from "../../store/watchlistProvider";
import GlobalContext from "../../store/globalProvider";

const Notificationitem = (props) => {
  const { isNight } = useContext(GlobalContext);
  const { allAlerts } = useContext(WatchContext);
  const { name, symbol, price, index } = props;
  const [alertPrice, setAlertPrice] = useState();
  const [shouldAlert, setShouldAlert] = useState();
  const [aboveBelow, setAboveBelow] = useState("above");

  useEffect(() => {
    if (alertPrice === "") return setShouldAlert(false);
    if (aboveBelow === "above") {
      if (
        Number.parseFloat(allAlerts[index].price) >
        Number.parseFloat(alertPrice)
      ) {
        setShouldAlert(true);
      } else {
        setShouldAlert(false);
      }
    }
    if (aboveBelow === "below") {
      if (allAlerts[index].price < alertPrice) {
        setShouldAlert(true);
      } else {
        setShouldAlert(false);
      }
    }
  }, [alertPrice, allAlerts]);

  return (
    <div
      className={
        shouldAlert
          ? `${classes.notifItemContainer} ${classes.alert}`
          : classes.notifItemContainer
      }
      style={isNight && !shouldAlert ? { backgroundColor: "#252525" } : null}
    >
      <span style={{ width: "40%", textAlign: "center", fontSize: ".9rem" }}>
        {name} ({symbol})
      </span>
      <div className={classes.notifItemControlContainer}>
        <input
          type="number"
          placeholder="Alert Price"
          onChange={(e) => {
            setAlertPrice(e.target.value);
          }}
        ></input>
        <select
          style={isNight ? { color: "white", borderColor: "white" } : null}
          onChange={(e) => setAboveBelow(e.target.value)}
        >
          <option value="above">Above</option>
          <option value="below">Below</option>
        </select>
        <span style={{ width: "20%" }}>{allAlerts[index].price}</span>
      </div>
    </div>
  );
};

export default Notificationitem;
