const API_KEY = 'XXXXXX';
const API_URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}&limit=2`;

export async function getCoins() {
  console.log("🚀 ~ file: api.js:5 ~ getCoins ~ getCoins:")
  
  // const response = await fetch(API_URL);
  // const data = await response.json();
  // return data.data;
}