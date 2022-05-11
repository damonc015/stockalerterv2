import React, { useEffect, useContext } from "react";
import classes from "./Sortmenu.module.css";
import { BsSearch } from "react-icons/bs";
import WatchContext from "../../store/watchlistProvider";
import GlobalContext from "../../store/globalProvider";

const Sortmenu = () => {
  const {
    watchlist,
    searchWatch,
    setSearchWatch,
    filteredSearchWatch,
    setFilteredSearchWatch,
    sortWatch,
    setSortWatch,
  } = useContext(WatchContext);

  const { isNight } = useContext(GlobalContext);

  const defaultSelect = (e) => {
    e.preventDefault();
    setSearchWatch("");
  };

  const handleSearch = (e) => {
    setSearchWatch(e.target.value);
  };

  useEffect(() => {
    // Search Filter
    (function filterWatch() {
      try {
        setFilteredSearchWatch(
          watchlist.filter((val) => {
            if (searchWatch === "") {
              return null;
            } else if (
              val.symbol.toLowerCase().includes(searchWatch.toLowerCase()) ||
              val.name.toLowerCase().includes(searchWatch.toLowerCase())
            ) {
              return val;
            } else {
              return null;
            }
          })
        );
      } catch {
        console.log("did not connect to api");
      }
    })();
  }, [searchWatch]);

  const sortList = (e) => {
    setSortWatch(e);
  };

  return (
    <div className={classes.sortContainer}>
      <form
        className={classes.formContainer}
        autoComplete="off"
        onSubmit={defaultSelect}
      >
        <label htmlFor="searchWatch" className={classes.label}>
          <BsSearch
            className={classes.searchIcon}
            style={isNight ? { color: "white" } : null}
          />
        </label>
        <input
          type="search"
          name="searchWatch"
          id="searchWatch"
          value={searchWatch}
          onChange={handleSearch}
          className={isNight ? classes.searchWatchNight : classes.searchWatch}
          placeholder="Search watchlist..."
        />
      </form>
      <form className={classes.formContainer}>
        <label
          htmlFor="sortWatch"
          className={classes.label}
          style={isNight ? { color: "white" } : null}
        >
          Sort by
        </label>
        <select
          id="sortWatch"
          value={sortWatch}
          onChange={(event) => sortList(event.target.value)}
          className={classes.watchlistSelect}
          style={isNight ? { color: "white" } : null}
        >
          <option value="recent">Recently Added</option>
          <option value="first">First Added</option>
        </select>
      </form>
    </div>
  );
};

export default Sortmenu;
