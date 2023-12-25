function loadUrl(imdbid) {
    var newurl = `https://www.omdbapi.com/?i=${imdbid}&apikey=dd7b9ba4`
    var imgurl = `https://img.omdbapi.com/?i=${imdbid}&apikey=dd7b9ba4`

    document.getElementById("Gmbar").src = `${imgurl}`;
    loadDoc(newurl, myFunction);
}

function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function myFunction(xhttp) {
    var resGet = JSON.parse(xhttp.responseText);
    var plot = resGet.Plot;
    var jdul = resGet.Title;

    document.getElementById("movieTitle").innerHTML = `${jdul}`;
    document.getElementById("moviePlot").innerHTML = `${plot}`;
  }