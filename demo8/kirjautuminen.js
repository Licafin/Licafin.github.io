document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulos").style.display = "block";
    } else {
        document.getElementById("kirjaudu_ulos").style.display = "none";
    }
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
    document.getElementById("kirjaudu_ulos").style.display = "block";
}

function kirjauduUlos() {
    localStorage.removeItem("nimi");
    localStorage.removeItem("kirjautunut");
    document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa";
    document.getElementById("kirjautumis_lomake").style.display = "block";
    document.getElementById("kirjaudu_ulos").style.display = "none";
}