import { useContext } from "react";
import Topbar from "../../components/sidebars/topbar";
import Navbar from "../../components/sidebars/navbar";
import GlobalContext from "../../store/globalProvider";
import { getSession } from "next-auth/client";
import About from "../../components/aboutPage";

const Aboutpage = () => {
  const { isNight } = useContext(GlobalContext);
  return (
    <div
      className="container"
      style={isNight ? { backgroundColor: "#141518", color: "#FAFAFA" } : null}
    >
      <Navbar />
      <div className="topContainer">
        <Topbar
          searchPlaceholder="Search up a stock to add"
          page="about"
        ></Topbar>
        <About />
      </div>
    </div>
  );
};

export default Aboutpage;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
  return { props: {} };
}
