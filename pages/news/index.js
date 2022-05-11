import { useEffect, useContext } from "react";
import NewsList from "../../components/news";
import Navbar from "../../components/sidebars/navbar";
import Topbar from "../../components/sidebars/topbar";
import Loadingpage from "../../components/loadingPage/index";
import SearchContext from "../../store/searchProvider";
import GlobalContext from "../../store/globalProvider";

const News = (props) => {
  const { articles } = props;

  if (!articles.data || articles.data.length < 1) {
    return <Loadingpage />;
  }

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

export async function getStaticProps(context) {
  let data;
  let arr = ["SPY", "AAPL", "DIA", "NDAQ"];
  let rand = Math.floor(Math.random() * arr.length);
  let possibleSymbols = arr[rand];

  try {
    const res = await fetch(
      `https://api.marketaux.com/v1/news/all?symbols=${possibleSymbols}&filter_entities=true&language=en&api_token=YXZ3J3Px3aMVE1bSLY9LUOatT6I9arcoxTfQg7wl`
    );
    data = await res.json();
  } catch (e) {
    console.log(e);
  }
  return {
    props: { articles: data },
    revalidate: 600,
  };
}
