var x = [];
var y = [];

fetch('https://spreadsheets.google.com/feeds/list/15damACaXrXfzAsXRfMgjkFLbfQFTlLjJ1SDTxk6OKw8/1/public/values?alt=json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        //console.log(myJson);

        for (var i = 0; i < myJson.feed.entry.length; i++) {


            x.push(myJson.feed.entry[i].gsx$x.$t);
            y.push(myJson.feed.entry[i].gsx$y.$t);

        }
        console.log(x);
        console.log(y);
        var i = 0;
        var lex = x.len;
        var ley = y.length;
        while (i < lex && i < ley) {
            x[i] = parseFloat(x[i]);
            y[i] = parseFloat(y[i]);
            i++
        }
        var w = x[0];
        var z = y[0];

        console.log(w);
        console.log(z);

        

    });