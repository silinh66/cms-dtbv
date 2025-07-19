var isProduct = true;

//local
// export const apiUrl = "http://127.0.0.1:3000";

//product
// export const apiUrl = "https://ten-ticker-server.herokuapp.com";

//dev
// export const apiUrl = "https://ten-ticker-server-dev.herokuapp.com";

//cPanel
export const apiUrl = isProduct
  ? "https://api.dautubenvung.com/api"
  : "http://127.0.0.1:3000/api";
console.log("apiUrl: ", apiUrl);
