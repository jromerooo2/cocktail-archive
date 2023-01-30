/**

* @OnlyCurrentDoc

*/

//script created for Mr.Fasse

function myFunction() {
  let arr_data = scrape("casper")
  Logger.log("Current price: " + arr_data[0]);
  Logger.log("Percent: " + arr_data[1]);
}

function scrape(coin){
  //using cryptorank.io webscrapping since coinmarketcap blocks requests for google
  var webURL = "https://cryptorank.io/price/"+coin;
  var response = UrlFetchApp.fetch(webURL);
  var $ = Cheerio.load(response.getContentText()); 
  let price = $('.table-cell-with-update__CurrencyWrapper-sc-crypsw-0').first().text().trim();
  let percent = $('.percent').first().text().trim();
  
  return [price,percent];
}