import classes from "./Searchbar.module.css";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import SearchContext from "../../../store/searchProvider";

const Searchbar = (props) => {
  const { placeholder, page } = props;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { allStocks, setStockHome, setStockNews, scrollTop } = useContext(SearchContext);

  const defaultSelect = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const selectStock = (selectedStock) => {
    if (page === "dashboard") {
      scrollTop();
      setStockHome(selectedStock);
    }
    if (page === "news") {
      setStockNews(selectedStock);
    }
    setSearch("");
  };

  useEffect(() => {
    // Search Filter
    (function filterNames() {
      try {
        setSearchResults(
          allStocks.filter((val) => {
            if (search === "") {
              return null;
            } else if (
              val.symbol.toLowerCase().includes(search.toLowerCase()) ||
              val.name.toLowerCase().includes(search.toLowerCase())
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
  }, [search]);

  return (
    <div className={classes.searchContainer}>
      <form
        className={classes.searchBar}
        autoComplete="off"
        onSubmit={defaultSelect}
      >
        <label htmlFor="navSearch"></label>
        <input
          className={classes.searchBarInput}
          id="navSearch"
          type="search"
          value={search}
          placeholder={placeholder}
          onChange={handleSearch}
          required
        />
      </form>
      <div className={classes.searchResultsContainer}>
        {page === "news" ? (
          <ul>
            {searchResults.slice(0, 8).map((stock) => {
              const { name, symbol } = stock;
              return (
                <Link href={"/news/" + symbol} key={symbol}>
                  <li
                    className={classes.searchItem}
                    onClick={() => selectStock(stock)}
                  >
                    <p>
                      {name} ({symbol})
                    </p>
                  </li>
                </Link>
              );
            })}
          </ul>
        ) : (
          <ul>
            {searchResults.slice(0, 8).map((stock) => {
              const { name, symbol } = stock;
              return (
                <li
                  className={classes.searchItem}
                  key={symbol}
                  onClick={() => selectStock(stock)}
                >
                  <p>
                    {name} ({symbol})
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
