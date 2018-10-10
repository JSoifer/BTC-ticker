$(document).ready(function() {
  $('#current').click(function() {

    let promise = new Promise(function(resolve,reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.coindesk.com/v1/bpi/currentprice.json`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {

      let body = JSON.parse(response);
      $('.showUsd').text(`The price of Bitcoin in USD is $ ${body.bpi.USD.rate}`);
      $('.showEur').text(`The price of Bitcoin in EUR is € ${body.bpi.EUR.rate}`);
      $('.showGbp').text(`The price of Bitcoin in GBP is £ ${body.bpi.GBP.rate}`);
    },

    function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
