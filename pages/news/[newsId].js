import NewsList from "../../components/news";
import Topbar from "../../components/sidebars/topbar";
import Navbar from "../../components/sidebars/navbar";
import { useContext } from "react";
import Loadingpage from "../../components/loadingPage/index";
import GlobalContext from "../../store/globalProvider";
import SearchContext from "../../store/searchProvider";

const NewsPage = (props) => {
  const { id, idInfo } = props;

  const { isNight } = useContext(GlobalContext);

  if (!idInfo) {
    return <Loadingpage />;
  }

  return (
    <div
      className="container"
      style={isNight ? { backgroundColor: "#141518", color: "#FAFAFA" } : null}
    >
      <Navbar />
      <div className="topContainer">
        <Topbar searchPlaceholder="Search news on a stock" page="news"></Topbar>
        <NewsList title={"News on " + id} data={idInfo.data}></NewsList>
      </div>
    </div>
  );
};

export default NewsPage;

export async function getStaticProps(context) {
  const newsId = context.params.newsId;
  let info;
  try {
    const res = await fetch(
      `https://api.marketaux.com/v1/news/all?symbols=${newsId}&filter_entities=true&language=en&api_token=YXZ3J3Px3aMVE1bSLY9LUOatT6I9arcoxTfQg7wl`
    );
    info = await res.json();
  } catch {
    console.log("error");
  }
  return {
    props: {
      id: newsId,
      idInfo: info,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
