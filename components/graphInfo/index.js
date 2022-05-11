import classes from "./index.module.css";
import Title from "./Title";
import Chart from "./Chart";
import Info from "./Info";
import { Fragment, useContext } from "react";
import SearchContext from "../../store/searchProvider";

const Graph = () => {
  const { topPageRef } = useContext(SearchContext);
  return (
    <Fragment>
      <div
        ref={topPageRef}
        style={{ position: "absolute", height: "8vh", top: "0" }}
      ></div>
      <div className={classes.container}>
        <Title></Title>
        <div className={classes.chartNinfo}>
          <Chart></Chart>
          <Info></Info>
        </div>
      </div>
    </Fragment>
  );
};

export default Graph;
