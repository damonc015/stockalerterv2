const axios = require("axios");

export async function getStockNames() {
  const URL = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${process.env.FMP_KEY}`;
  let data;
  try {
    const response = await axios.get(URL);
    data = response.data;
  } catch (e) {
    data = "error";
  }
  return data;
}
export async function getStockPriceHistory(symbol, date) {
  const URL = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?${date}&apikey=${process.env.FMPTWO_KEY}`;
  let data;
  try {
    const response = await axios.get(URL);
    data = response.data;
  } catch (e) {
    data = "error";
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
