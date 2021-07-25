//altura de sección principal
var navbar = document.getElementById('navbar');
var str = navbar.offsetHeight + "px";
document.getElementById('welcome-section').style.setProperty('height', 'calc(100vh - ' + str + ')');

// evento de cards
var texto;
function enter(id) {
    texto = document.getElementById(id).innerHTML;
    let meq = "< ".fontcolor("#e68a00");
    let maq = " />".fontcolor("#e68a00");
    document.getElementById(id).innerHTML = meq + texto + maq;
}
function out(id) { document.getElementById(id).innerHTML = texto; }

