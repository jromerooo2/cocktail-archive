/**

* @OnlyCurrentDoc

*/

function main() {
  let arr_data = scrape_coin("casper")
  add_coin(arr_data);
  Logger.log("Finished.")
}

function add_coin(data) {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([data[0],data[1]]);
}

function scrape_coin(coin){
  //using cryptorank.io webscrapping since coinmarketcap blocks requests for google
  var webURL = "https://cryptorank.io/price/"+coin;
  var response = UrlFetchApp.fetch(webURL);
  var $ = Cheerio.load(response.getContentText()); 
  let price = $('.table-cell-with-update__CurrencyWrapper-sc-crypsw-0').first().text().trim();
  let percent = $('.percent').first().text().trim();

  return [price,percent];
}