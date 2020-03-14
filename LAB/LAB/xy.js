var x = [];
var y = [];



fetch('https://spreadsheets.google.com/feeds/list/1tbk3Au1lY7BYdfV3SUBkeQi0aTM02GDoe-SyBkYlJTM/1/public/values?alt=json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        //console.log(myJson);

        for (var i = 0; i < myJson.feed.entry.length; i++) {


            x.push(parseFloat(myJson.feed.entry[i].gsx$x.$t));
            y.push(parseFloat(myJson.feed.entry[i].gsx$y.$t));

        }


        console.log(x);

        //var w = x[0];
        //var z = y[0];
        //
        //for (i in x) {
        //    console.log(x[i]);
        //}
        //console.log(w);
        //console.log(typeof(w));
        //console.log(z);
        //document.getElementById("demo").innerHTML = w;
        //document.getElementById("demo1").innerHTML = z;



    });