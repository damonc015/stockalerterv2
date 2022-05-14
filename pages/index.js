import Head from "next/head";
import Navbar from "../components/sidebars/navbar";
import Topbar from "../components/sidebars/topbar";
import Watchlist from "../components/watchlist";
import Graph from "../components/graphInfo";
import { useEffect, useContext } from "react";
import GlobalContext from "../store/globalProvider";
import SearchContext from "../store/searchProvider";

export default function Home() {
  const { isNight } = useContext(GlobalContext);
  const { allStocks, setAllStocks } = useContext(SearchContext);

  useEffect(() => {
    if (allStocks) return;
    fetch(
      "https://financialmodelingprep.com/api/v3/available-traded/list?apikey=4c403e64075f1d5283c4aaef93a6fab6"
    )
      .then((response) => response.json())
      .then((data) => setAllStocks(data))
      .catch((e) => console.log(e));
  }, [allStocks]);

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
export async function getStaticProps(context) {
  let stocklist;
  try {
    const res = await fetch(
      "https://financialmodelingprep.com/api/v3/available-traded/list?apikey=4c403e64075f1d5283c4aaef93a6fab6"
    );
    stocklist = await res.json();
  } catch (e) {
    console.log(e);
  }
  return {
    props: { stocklist: stocklist },
    revalidate: 600,
  };
}
