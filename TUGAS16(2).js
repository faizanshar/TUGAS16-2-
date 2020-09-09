var p = 8;
var l = 6;
var t = 4;

function volume(p, l, t){
    var volume = p * l * t;
    return volume;
}
document.write("Jadi hasil dari volume balok adalah = " + volume(p, l, t) + "<br>")

function luas (p, l, t){
    var luas = 2 * (p * l + p * t + l * t);
    return luas;
}
document.write("Jadi hasil dari luas permukaan balok adalah = " + luas(p, l, t))