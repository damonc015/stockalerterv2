import React, { useContext } from "react";
import Listitem from "./Listitem";
import WatchContext from "../../store/watchlistProvider";
import classes from "./list.module.css";

const List = () => {
  const { watchlist, searchWatch, filteredSearchWatch, sortWatch } =
    useContext(WatchContext);

  if (!watchlist) return;
  let reverseWatchlist = [...watchlist].reverse();
  let reverseFilterlist = [...filteredSearchWatch].reverse();

  if (sortWatch === "first") {
    if (searchWatch && filteredSearchWatch.length > 0) {
      return filteredSearchWatch.map((item, index) => {
        return (
          <Listitem
            key={item.id}
            id={item.id}
            index={index}
            symbol={item.symbol}
            name={item.name}
            price={item.price}
            isNotif={item.isNotif}
          ></Listitem>
        );
      });
    }
    if (searchWatch) {
      return <p>Could not find a match</p>;
    }
    return (
      <div className={classes.container}>
        {watchlist.map((item, index) => {
          return (
            <Listitem
              key={item.id}
              id={item.id}
              index={index}
              symbol={item.symbol}
              name={item.name}
              price={item.price}
              isNotif={item.isNotif}
            ></Listitem>
          );
        })}
      </div>
    );
  }
  if (sortWatch === "recent") {
    if (searchWatch && filteredSearchWatch.length > 0) {
      return reverseFilterlist.map((item, index) => {
        return (
          <Listitem
            key={item.id}
            id={item.id}
            index={index}
            symbol={item.symbol}
            name={item.name}
            price={item.price}
            isNotif={item.isNotif}
          ></Listitem>
        );
      });
    }
    if (searchWatch) {
      return <p>Could not find a match</p>;
    }
    return (
      <div className={classes.container}>
        {reverseWatchlist.map((item, index) => {
          return (
            <Listitem
              key={item.id}
              id={item.id}
              index={index}
              symbol={item.symbol}
              name={item.name}
              price={item.price}
              isNotif={item.isNotif}
            ></Listitem>
          );
        })}
      </div>
    );
  }
  return;
};

export default List;
