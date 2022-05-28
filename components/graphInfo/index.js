import classes from "./index.module.css";
import Title from "./Title";
import { Fragment, useContext } from "react";
import SearchContext from "../../store/searchProvider";
import dynamic from "next/dynamic";

const Graph = () => {
  const { topPageRef } = useContext(SearchContext);
  const DynamicChart = dynamic(() => import("./Chart"));
  const DynamicInfo = dynamic(() => import("./Info"));
  return (
    <Fragment>
      <div className={classes.container}>
        <Title></Title>
        <div className={classes.chartNinfo}>
          <DynamicChart />
          <DynamicInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default Graph;
