import React, { useState, useContext } from "react";
import GlobalContext from "../../store/globalProvider";
import SearchContext from "../../store/searchProvider";
import WatchContext from "../../store/watchlistProvider";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import classes from "./Info.module.css";
import { v4 as uuidv4 } from "uuid";
import cloneDeep from "lodash/cloneDeep";

const Info = () => {
  const [showInfo, setShowInfo] = useState(true);
  const { isNight } = useContext(GlobalContext);
  const { stockHome } = useContext(SearchContext);
  const { watchlist, setWatchlist, graphInfo } = useContext(WatchContext);

  function addWatch() {
    if (watchlist.filter((item) => item.name === stockHome.name).length > 0)
      return;
    let copyWatch = cloneDeep(watchlist);
    copyWatch.push({
      name: stockHome.name,
      symbol: stockHome.symbol,
      price: stockHome.price,
      id: uuidv4(),
      isNotif: "false",
    });
    return setWatchlist(copyWatch);
  }

  function numComma(x) {
    if (!x) return;
    return x.toLocaleString();
  }

  if (!graphInfo || !stockHome) {
    return (
      <div style={{ padding: "2rem" }}>
        Stock information not available try again later
      </div>
    );
  }

  return (
    <div
      className={showInfo ? classes.infoContainer : classes.hideContainer}
      style={
        isNight && showInfo
          ? { backgroundColor: "rgb(66,66,66)", color: "#FAFAFA" }
          : null
      }
    >
      <div className={classes.infoTitle}>
        <span
          className={classes.infoIcon}
          onClick={() => {
            setShowInfo((prev) => !prev);
          }}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
        {graphInfo[0].symbol}
      </div>

      <div
        className={classes.columns}
        style={showInfo ? null : { display: "none" }}
      >
        <div className={classes.column}>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}>Price:</span>
            <span className={classes.columnItemValue}>
              {graphInfo[0].price
                ? "$" + Number.parseFloat(graphInfo[0].price)
                : "N/A"}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}> Market Cap:</span>
            <span className={classes.columnItemValue}>
              {graphInfo[0].marketCap
                ? "$" + numComma(graphInfo[0].marketCap)
                : "N/A"}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}>Volume:</span>
            <span className={classes.columnItemValue}>
              {graphInfo[0].volume ? numComma(graphInfo[0].volume) : "N/A"}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}> Avg Volume:</span>
            <span className={classes.columnItemValue}>
              {graphInfo[0].avgVolume
                ? numComma(graphInfo[0].avgVolume)
                : "N/A"}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}>Total Shares:</span>
            <span className={classes.columnItemValue}>
              {graphInfo[0].sharesOutstanding
                ? numComma(graphInfo[0].sharesOutstanding)
                : "N/A"}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}>P/E Ratio:</span>
            <span className={classes.columnItemValue}>
              {graphInfo[0].pe
                ? Number.parseFloat(graphInfo[0].pe).toFixed(3)
                : "N/A"}
            </span>
          </p>
        </div>
        <div className={classes.column}>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}>Price Avg 50D:</span>
            <span className={classes.columnItemValue}>
              ${Number.parseFloat(graphInfo[0].priceAvg50).toFixed(2)}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}>Price Avg 200D:</span>
            <span className={classes.columnItemValue}>
              ${Number.parseFloat(graphInfo[0].priceAvg200).toFixed(2)}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}>Year High:</span>
            <span className={classes.columnItemValue}>
              ${Number.parseFloat(graphInfo[0].yearHigh).toFixed(2)}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}> Year Low:</span>
            <span className={classes.columnItemValue}>
              ${Number.parseFloat(graphInfo[0].yearLow).toFixed(2)}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}> Day High:</span>
            <span className={classes.columnItemValue}>
              ${Number.parseFloat(graphInfo[0].dayHigh).toFixed(2)}
            </span>
          </p>
          <p className={classes.columnItem}>
            <span className={classes.columnItemWord}>Day Low:</span>
            <span className={classes.columnItemValue}>
              ${Number.parseFloat(graphInfo[0].dayLow).toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      <div
        className={classes.buttonContainer}
        style={showInfo ? null : { display: "none" }}
      >
        <button className={classes.button} onClick={addWatch}>
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default Info;
