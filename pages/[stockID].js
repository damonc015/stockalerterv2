import Head from "next/head";
import Navbar from "../components/sidebars/navbar";
import Topbar from "../components/sidebars/topbar";
import Watchlist from "../components/watchlist";
import Graph from "../components/graphInfo";
import { useEffect, useContext } from "react";
import GlobalContext from "../store/globalProvider";
import SearchContext from "../store/searchProvider";
import WatchContext from "../store/watchlistProvider";
import ErrorPage from "next/error";
import { getStockNames } from "./api/calls/apiCalls";

export default function Stockpage(props) {
  const { isNight } = useContext(GlobalContext);
  const { allStocks, setAllStocks, stockHome } = useContext(SearchContext);
  const { graphInfo, setGraphInfo } = useContext(WatchContext);
  let { id, test } = props;

  console.log(getStockNames());
  console.log(test)

//   if (stocklist === 1 || !targetStock === 1)
//     return <ErrorPage statusCode={505} />;

//   useEffect(() => {
//     if (allStocks) return;
//     setAllStocks(stocklist);
//   }, [allStocks]);

  //   useEffect(() => {
  //     if (!stockHome) return;
  //     fetch(
  //       `https://financialmodelingprep.com/api/v3/quote/${stockHome.symbol}?apikey=4c403e64075f1d5283c4aaef93a6fab6`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setGraphInfo(data[0]))
  //       .catch((e) => console.log("Graph Data unavailable"));
  //   }, [stockHome]);

  useEffect(() => {}, [graphInfo]);
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

      <div
        className="container"
        style={
          isNight ? { backgroundColor: "#141518", color: "#FAFAFA" } : null
        }
      >
        <Navbar />
        <div className="topContainer">
          <Topbar
            searchPlaceholder="Search up a stock to add"
            page="dashboard"
          ></Topbar>
          <div className="graphContainer">
            <Graph></Graph>
            <Watchlist></Watchlist>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const id = context.params.stockID;
  const test = process.env.FMP_KEY;
  //   try {
  //     const res = await fetch(
  //       "https://financialmodelingprep.com/api/v3/available-traded/list?apikey=4c403e64075f1d5283c4aaef93a6fab6"
  //     );
  //     stocklist = await res.json();
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   try {
  //     const res = await fetch(
  //       `https://financialmodelingprep.com/api/v3/quote/${id}?apikey=4c403e64075f1d5283c4aaef93a6fab6`
  //     );
  //     targetStock = await res.json();
  //   } catch (e) {
  //     console.log(e);
  //   }
  return {
    props: { id, test},
  };
}
