function show() {
    document.getElementById("side-menu").classList.toggle("show");
}

function data() {
    var span;
    var date = new Date();

    an = date.getFullYear();

    span = document.getElementById("data");

    span.innerHTML = "<h5> Acest website a fost realizat în cadrul competiției ”Tekwill Junior Ambassadors” organizată de proiectul ”Tekwill în Fiecare Școală” și nu reflectă neapărat opinia proiectului ©️</h5>" + an;
}

data();