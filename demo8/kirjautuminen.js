document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
  if (localStorage.getItem("kirjautunut") === "kylla") {
    document.getElementById('tervetuloa_teksti').textContent += " "; // 空白を追加
    document.getElementById('tervetuloa_teksti').textContent += localStorage.getItem("nimi");
    document.getElementById('kirjaudu_nappi').style.display = "none"  // kun kirjautunut "kirjaudu" nappi haviää
  }else{
    document.getElementById('uloskirjaudu_nappi').style.display = "none";  //index sivusta ottaa pois "kirjaudu ulos" nappi
  }
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}

function kirjauduUlos() {
  localStorage.clear();
  document.getElementById('uloskirjaudu_nappi').style.display = ""
  document.getElementById('kirjaudu_nappi').style.display = "none"
}


