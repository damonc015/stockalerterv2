const axios = require("axios");

export async function getStockNames() {
  const URL = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${process.env.FMP_KEY}`;
  let data = 1;
  try {
    const response = await axios.get(URL);
    data = response.data;
  } catch (e) {
    data = "error";
  }
  return data;
}
export async function getStockPriceHistory(symbol) {
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${process.env.ALP_KEY}`;
  let data = 1;
  try {
    const response = await axios.get(URL);
    data = response.data;
  } catch (err) {
    console.log(err);
  }
  return data;
}
export async function getStockData(id) {
  const URL = `https://financialmodelingprep.com/api/v3/quote/${id}?apikey=${process.env.FMPTWO_KEY}`;
  let data;
  try {
    const response = await axios.get(URL);
    data = response.data;
  } catch (e) {
    data = "error";
  }
  return data;
}
export async function getNewsArticles(id) {
  let info;
  try {
    const res = await fetch(
      `https://api.marketaux.com/v1/news/all?symbols=${id}&filter_entities=true&language=en&api_token=${process.env.NEWS_KEY}`
    );
    info = await res.json();
  } catch {
    info = "error";
  }
  return info;
}
