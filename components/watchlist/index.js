import List from "./list";
import Sortmenu from "./Sortmenu";
import classes from "./index.module.css";
import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../store/globalProvider";

const index = () => {
  const { isNight } = useContext(GlobalContext);
  const socket = useRef("");

  useEffect(() => {
    if (socket.current === "") {
      socket.current = new WebSocket(
        `wss://ws.finnhub.io?token=c868vsaad3i9fvji44qg`
      );
    }
    socket.current.onopen = () => {
      console.log("ws connected")
      socket.current.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    }
    socket.current.onmessage = (e) =>{
      const msg = JSON.parse(e.data)
      console.log(msg);
    }
    return () => socket.current.close();
  }, []);

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
