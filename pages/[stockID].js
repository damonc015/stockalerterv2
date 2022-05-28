import Head from "next/head";
import Navbar from "../components/sidebars/navbar";
import Topbar from "../components/sidebars/topbar";
import Watchlist from "../components/watchlist";
import { useEffect, useContext } from "react";
import GlobalContext from "../store/globalProvider";
import SearchContext from "../store/searchProvider";
import WatchContext from "../store/watchlistProvider";
import ErrorPage from "next/error";
import {
  getStockNames,
  getStockPriceHistory,
  getStockData,
} from "./api/calls/apiCalls";
import { getSession } from "next-auth/client";
import dynamic from "next/dynamic";

export default function Stockpage(props) {
  const { isNight } = useContext(GlobalContext);
  const { allStocks, setAllStocks, setStockHome } = useContext(SearchContext);
  const { graphInfo, setGraphInfo, setGraphData, date, sliceDate } =
    useContext(WatchContext);
  let { id, stocklist, stockinfo, priceHistory } = props;

  const DynamicGraph = dynamic(() => import("../components/graphInfo"));

  if (
    !stocklist ||
    !stockinfo ||
    !priceHistory ||
    stocklist == "error" ||
    stockinfo == "error" ||
    priceHistory == "error"
  ) {
    return <ErrorPage statusCode={404} />;
  }
  if (
    stocklist["Error Message"] ||
    stockinfo["Error Message"] ||
    priceHistory["Error Message"]
  )
    return <ErrorPage statusCode={404} />;

  useEffect(() => {
    setAllStocks(stocklist);
    setGraphInfo(stockinfo);
    let stock = allStocks.find((item) => item.symbol == id);
    setStockHome(stock);
  }, [id, graphInfo]);

  useEffect(() => {
    priceHistory["weekData"] = priceHistory["Weekly Time Series"];
    const { weekData } = priceHistory;
    setGraphData(sliceDate(Object.entries(weekData)));
  }, [id, date]);

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
      <div className="topContainer">
        <Topbar
          searchPlaceholder="Search up a stock to add"
          page="dashboard"
        ></Topbar>
        <div className="graphContainer">
          <DynamicGraph />
          <Watchlist />
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const id = context.params.stockID;
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
  let priceHistory, stockinfo, stocklist;
  stocklist = await getStockNames();
  stocklist.forEach((item) => {
    delete item.exchange;
    delete item.exchangeShortName;
  });
  stockinfo = await getStockData(id);
  priceHistory = await getStockPriceHistory(id);
  return {
    props: { id, stocklist, stockinfo, priceHistory },
  };
}
