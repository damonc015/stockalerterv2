import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../../store/globalProvider";
import SearchContext from "../../store/searchProvider";
import WatchContext from "../../store/watchlistProvider";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import classes from "./Info.module.css";
import { v4 as uuidv4 } from "uuid";

const Info = () => {
  const [showInfo, setShowInfo] = useState(true);
  const { isNight } = useContext(GlobalContext);
  const { stockHome } = useContext(SearchContext);
  const { watchlist, setWatchlist, graphInfo } = useContext(WatchContext);

  function addWatch() {
    if (watchlist.filter((item) => item.name === stockHome.name).length > 0)
      return;
    let copyWatch = [...watchlist];
    copyWatch.push({
      name: stockHome.name,
      symbol: stockHome.symbol,
      price: stockHome.price,
      id: uuidv4(),
    });
    return setWatchlist(copyWatch);
  }

  function numComma(x) {
    if (!x) return;
    return x.toLocaleString();
  }


  if (!graphInfo) {
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
        {graphInfo.symbol}
      </div>

      <div
        className={showInfo ? classes.columnNbutton : classes.hideColNButton}
      >
        <div className={classes.columns}>
          <div className={classes.column}>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}>Price</span>
              <span className={classes.columnItemValue}>
                {graphInfo.price
                  ? "$" + Number.parseFloat(graphInfo.price)
                  : "N/A"}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}> Market Cap</span>
              <span className={classes.columnItemValue}>
                {graphInfo.marketCap
                  ? "$" + numComma(graphInfo.marketCap)
                  : "N/A"}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}>Volume</span>
              <span className={classes.columnItemValue}>
                {graphInfo.volume ? numComma(graphInfo.volume) : "N/A"}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}> Avg Volume</span>
              <span className={classes.columnItemValue}>
                {graphInfo.avgVolume ? numComma(graphInfo.avgVolume) : "N/A"}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}>Total Shares</span>
              <span className={classes.columnItemValue}>
                {graphInfo.sharesOutstanding
                  ? numComma(graphInfo.sharesOutstanding)
                  : "N/A"}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}>P/E Ratio</span>
              <span className={classes.columnItemValue}>
                {graphInfo.pe
                  ? Number.parseFloat(graphInfo.pe).toFixed(3)
                  : "N/A"}
              </span>
            </p>
          </div>
          <div className={classes.column}>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}>Price Avg 50D</span>
              <span className={classes.columnItemValue}>
                ${Number.parseFloat(graphInfo.priceAvg50).toFixed(2)}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}>Price Avg 200D</span>
              <span className={classes.columnItemValue}>
                ${Number.parseFloat(graphInfo.priceAvg200).toFixed(2)}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}>Year High</span>
              <span className={classes.columnItemValue}>
                ${Number.parseFloat(graphInfo.yearHigh).toFixed(2)}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}> Year Low</span>
              <span className={classes.columnItemValue}>
                ${Number.parseFloat(graphInfo.yearLow).toFixed(2)}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}> Day High</span>
              <span className={classes.columnItemValue}>
                ${Number.parseFloat(graphInfo.dayHigh).toFixed(2)}
              </span>
            </p>
            <p className={classes.columnItem}>
              <span className={classes.columnItemWord}>Day Low</span>
              <span className={classes.columnItemValue}>
                ${Number.parseFloat(graphInfo.dayLow).toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        <div className={classes.buttonContainer}>
          <button className={classes.button} onClick={addWatch}>
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
