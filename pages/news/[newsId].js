import NewsList from "../../components/news";
import Topbar from "../../components/sidebars/topbar";
import Navbar from "../../components/sidebars/navbar";
import { useContext, useEffect } from "react";
import GlobalContext from "../../store/globalProvider";
import ErrorPage from "next/error";
import { getNewsArticles } from "../api/calls/apiCalls";
import { getSession } from "next-auth/client";

const NewsPage = (props) => {
  const { id, idInfo } = props;

  const { isNight } = useContext(GlobalContext);

  if (!idInfo || idInfo.error || idInfo == "error") {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {});

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

export async function getServerSideProps(context) {
  const newsId = context.params.newsId;
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
  let article = await getNewsArticles(newsId);
  return {
    props: {
      id: newsId,
      idInfo: article,
    },
  };
}
