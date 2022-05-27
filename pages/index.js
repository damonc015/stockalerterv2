import Head from "next/head";
import Navbar from "../components/sidebars/navbar";
import Topbar from "../components/sidebars/topbar";
import Watchlist from "../components/watchlist";
import Notifcations from "../components/notifications";
import { useState, useEffect, useContext, useRef } from "react";
import GlobalContext from "../store/globalProvider";
import SearchContext from "../store/searchProvider";
import { getStockNames } from "./api/calls/apiCalls";
import { getSession } from "next-auth/client";
import WatchContext from "../store/watchlistProvider";
import { GiCancel } from "react-icons/gi";

export default function Home(props) {
  const { isNight, firstTime, setFirstTime } = useContext(GlobalContext);
  const { setAllStocks } = useContext(SearchContext);
  const { notif, setAllAlerts } = useContext(WatchContext);
  const { stocklist } = props;
  const socket = useRef("");
  const [sockError, setSockError] = useState();

  useEffect(() => {
    setAllStocks(stocklist);
  }, []);

  useEffect(() => {
    socket.current = new WebSocket(
      `wss://ws.finnhub.io?token=c868vsaad3i9fvji44qg`
    );

    socket.current.onerror = () => {
      setSockError(true);
    };

    socket.current.onopen = () => {
      setSockError(false);
      notif.map((item) => {
        socket.current.send(
          JSON.stringify({ type: "subscribe", symbol: `${item.symbol}` })
        );
      });
    };
    socket.current.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.type === "trade" && msg.type.length > 0) {
        const { data } = msg;
        for (let i = 0; i < notif.length; i++) {
          let x = data.find((item) => item.s == notif[i].symbol);
          if (x !== undefined) {
            setAllAlerts((prev) => {
              prev[i].price = x.p.toFixed(2);
              return [...prev];
            });
          }
        }
      }
    };
    return () => socket.current.close();
  }, [notif]);

  return (
    <div
      className="container"
      style={
        isNight ? { backgroundColor: "rgb(50,50,50)", color: "#FAFAFA" } : null
      }
    >
      <Head>
        <title>Stock Alerter</title>
        <meta
          name="description"
          content="A web application to alert stock price changes"
        />
      </Head>

      <Navbar />
      {firstTime && (
        <div className="firstTimeMsgContainer">
          <div className="firstTimeMsg">
            First time? Check out the info section if you get lost!
            <GiCancel
              className="cancel"
              onClick={() => {
                setFirstTime(false);
              }}
            />
          </div>
        </div>
      )}
      <div className="topContainer">
        <Topbar
          searchPlaceholder="Search up a stock to add"
          page="dashboard"
        ></Topbar>
        <div className="graphContainer">
          {sockError && !firstTime && (
            <div
              style={{ textAlign: "center", color: "red", paddingTop: "2rem" }}
            >
              Websocket failed to connect, reset alert to attempt reconnect
            </div>
          )}
          <Notifcations />
          <Watchlist></Watchlist>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  let stocklist = await getStockNames();
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
  return {
    props: { stocklist: stocklist },
  };
}
