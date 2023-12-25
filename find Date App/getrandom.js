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
    var nama = JSON.parse(xhttp.responseText);
    console.log(nama.results[0]);
    document.getElementById("Name").innerHTML =
    `${nama.results[0].name.title} ${nama.results[0].name.first} ${nama.results[0].name.last}`;
    document.getElementById("email").innerHTML =
    nama.results[0].email;
    document.getElementById("imagek").src =
    nama.results[0].picture.large;
 }