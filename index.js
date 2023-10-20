// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const url = "https://api.blockchain.com/v3/exchange/tickers/";

// 3. Use the public folder for static files.
app.use(express.static("public"));

app.get("/", async (req, res) => {
    const BTC = await axios.get(url + "BTC-USD");
    const ETH = await axios.get(url + "ETH-USD");
    //const result = await axios.get(url + "/v4/matches?dateFrom=" + currentDate + "&dateTo=" + dateTo);
    const btcData = BTC.data;
    const ethData = ETH.data;
    console.log(btcData);
    res.render("index.ejs", {bitcoin: btcData, ethereum: ethData});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });