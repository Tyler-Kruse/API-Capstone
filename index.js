//import modules
import express from "express";
import axios from "axios";
//set constants
const app = express();
const port = 3000;
const url = "https://api.blockchain.com/v3/exchange/tickers/";

//set static file
app.use(express.static("public"));

//get crypto prices else send error
app.get("/", async (req, res) => {
    try{
    const BTC = await axios.get(url + "BTC-USD");
    const ETH = await axios.get(url + "ETH-USD");
    const btcData = BTC.data;
    const ethData = ETH.data;
    console.log(btcData);
    res.render("index.ejs", {bitcoin: btcData, ethereum: ethData});
    }catch(err){
        res.render("index.ejs");
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });