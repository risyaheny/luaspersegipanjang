var panjangInput = document.querySelector(".panjang-input-field");
var lebarInput = document.querySelector(".lebar-input-field");
var retangleButton = document.querySelector(".retangle");
var result = document.querySelector(".result");
var Luas, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    Luas = panjang*lebar;
    alert("Your answer is: " + Luas);
}

