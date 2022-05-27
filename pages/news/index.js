import { useEffect, useContext } from "react";
import NewsList from "../../components/news";
import Navbar from "../../components/sidebars/navbar";
import Topbar from "../../components/sidebars/topbar";
import SearchContext from "../../store/searchProvider";
import GlobalContext from "../../store/globalProvider";
import { getStockNames } from "../api/calls/apiCalls";
import { getSession } from "next-auth/client";

const News = (props) => {
  const { articles, stocklist } = props;
  const { isNight } = useContext(GlobalContext);
  const { allStocks, setAllStocks } = useContext(SearchContext);

  useEffect(() => {
    if (allStocks) return;
    setAllStocks(stocklist);
  }, [allStocks]);

  if (!articles.data || articles.data.length < 1) {
    return (
      <div
        className="container"
        style={
          isNight ? { backgroundColor: "#141518", color: "#FAFAFA" } : null
        }
      >
        <Navbar />
        <div className="topContainer">
          <Topbar
            searchPlaceholder="Search news on a stock"
            page="news"
          ></Topbar>
        </div>
      </div>
    );
  }

  return (
    <div
      className="container"
      style={isNight ? { backgroundColor: "#141518", color: "#FAFAFA" } : null}
    >
      <Navbar />
      <div className="topContainer">
        <Topbar searchPlaceholder="Search news on a stock" page="news"></Topbar>
        <NewsList title={"Recent News"} data={articles.data}></NewsList>
      </div>
    </div>
  );
};

export default News;

export async function getServerSideProps(context) {
  let data, stocklist;
  let arr = ["SPY", "AAPL", "DIA", "NDAQ"];
  let rand = Math.floor(Math.random() * arr.length);
  let possibleSymbols = arr[rand];
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
  try {
    const res = await fetch(
      `https://api.marketaux.com/v1/news/all?symbols=${possibleSymbols}&filter_entities=true&language=en&api_token=YXZ3J3Px3aMVE1bSLY9LUOatT6I9arcoxTfQg7wl`
    );
    data = await res.json();
  } catch (e) {
    console.log(e);
  }
  stocklist = await getStockNames();
  return {
    props: { articles: data, stocklist: stocklist },
  };
}
