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
    var parser = new DOMParser();
    var resGet = parser.parseFromString(xhttp.responseText, "text/xml");
    let getVal = resGet.getElementById("501306");
    var tempVal = getVal.childNodes[9].childNodes[1].childNodes[1].childNodes[0].nodeValue;
    var humVal = getVal.childNodes[7].childNodes[1].childNodes[1].childNodes[0].nodeValue;
    var weatVal = getVal.childNodes[17].childNodes[5].childNodes[1].childNodes[0].nodeValue;
    var windDir = getVal.childNodes[19].childNodes[5].childNodes[3].childNodes[0].nodeValue;
    var windSpid = getVal.childNodes[21].childNodes[5].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("suhu_nilai").innerHTML = `${tempVal} C`;
    document.getElementById("klembap").innerHTML = `${humVal}%`;
    document.getElementById("angen").innerHTML = `${windDir} - ${windSpid} MPH`;
    
    if (weatVal == 0) {
      var cuawaca = "Cerah";
    } else if (weatVal == 1) {
      var cuawaca = "Cerah Berawan";
    } else if (weatVal == 2) {
      var cuawaca = "Cerah Berawan";
    } else if (weatVal == 3) {
      var cuawaca = "Berawan";
    } else if (weatVal == 4) {
      var cuawaca = "Berawan Tebal";
    } else if (weatVal == 5) {
      var cuawaca = "Udara Kabur";
    } else if (weatVal == 10) {
      var cuawaca = "Asap";
    } else if (weatVal == 45) {
      var cuawaca = "Kabut";
    } else if (weatVal == 60) {
      var cuawaca = "Hujan Ringan";
    } else if (weatVal == 61) {
      var cuawaca = "Hujan Sedang";
    } else if (weatVal == 63) {
      var cuawaca = "Hujan Lebat";
    } else if (weatVal == 80) {
      var cuawaca = "Hujan Lokal";
    } else if (weatVal == 95 || weatVal == 97) {
      var cuawaca = "Hujan Petir";
    };

    document.getElementById("cuwaca").innerHTML = `${cuawaca}`;
    console.log(windDir);
    console.log(windSpid);
  }