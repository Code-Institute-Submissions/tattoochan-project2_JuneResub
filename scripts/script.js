function convertCurrency() {
    var div = document.getElementById("currency-holder");
    var y = div.getElementsByTagName("P");
    var ctr;
    for (ctr = 0; ctr < y.length; ctr++) {
        y[ctr].innerHTML = "";
    }
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var xmlhttp = new XMLHttpRequest();
    // Setting the url for download
    var url = "https://api.exchangerate-api.com/v4/latest/" + from;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    // download and process the data to display on the html page
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var result = xmlhttp.responseText;
            var jsResult = JSON.parse(result);
            var oneUnit = jsResult.rates[to] / jsResult.rates[from];
            
            // display the rates for some prefix countries 
            for (let x in jsResult.rates) {
                if (x == 'USD') {
                    document.getElementById("USA").innerHTML += jsResult.rates[x].toFixed(3) + ' ' + x + "<br>"
                }
                if (x == 'SGD') {
                    document.getElementById("SGD").innerHTML += jsResult.rates[x].toFixed(3) + ' ' + x + "<br>"
                }
                if (x == 'EUR') {
                    document.getElementById("EUR").innerHTML += jsResult.rates[x].toFixed(3) + ' ' + x + "<br>"
                }
                if (x == 'GBP') {
                    document.getElementById("GBP").innerHTML += jsResult.rates[x].toFixed(3) + ' ' + x + "<br>"
                }
                if (x == 'INR') {
                    document.getElementById("INR").innerHTML += jsResult.rates[x].toFixed(3) + ' ' + x + "<br>"
                }
                if (x == 'AUD') {
                    document.getElementById("AUD").innerHTML += jsResult.rates[x].toFixed(3) + ' ' + x + "<br>"
                }
                if (x == 'PHP') {
                    document.getElementById("PHP").innerHTML += jsResult.rates[x].toFixed(3) + ' ' + x + "<br>"
                }

            }
            
            // display result of selected currency conversion
            var amt = document.getElementById("fromAmount").value;
            var to_prefix = document.getElementById("to").value;
            document.getElementById("toFromtxt").innerHTML = amt + ' ' + from + ' = ';
            document.getElementById("toAmount").innerHTML = (oneUnit * amt).toFixed(3) + ' ' + to_prefix;


        }
    }

}
