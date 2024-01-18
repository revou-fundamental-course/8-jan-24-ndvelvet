var inputLuas=document.getElementById('inputLuas');
var buttonLuas = document.getElementById("btn-luas");
var resetLuas = document.getElementById("rst-luas");

buttonLuas.addEventListener('click',function(){
  resultluas();
})

resetLuas.addEventListener('click', function(){
    resetluas();
})




function resultluas() {
    if(inputLuas.value==""){
        alert("isi nilai sisi !")
    }else{
    var hasilLuas = parseInt(inputLuas.value) * parseInt(inputLuas.value);
    var tampil = document.getElementById('hasilLuas').innerHTML = hasilLuas;
    }

}
function resetluas() {
    inputLuas.value="";
    var tampil = document.getElementById('hasilLuas').innerHTML="";
}



var inputKeliling=document.getElementById('inputKeliling');
var buttonKeliling = document.getElementById("btn-keliling");
var resetkeliling =document.getElementById('rst-keliling');
buttonKeliling.addEventListener('click',function(){
    resultkeliling();
})

function resultkeliling() {
    if(inputKeliling.value == ""){
        alert("isi nilai sisi !")
    }else{
        var hasilKeliling = parseInt(inputKeliling.value) * 4;
        var tampil = document.getElementById('hasilKeliling').innerHTML=hasilKeliling;
    }

}

resetkeliling.addEventListener('click',function(){
    resetKeliling();
})

function resetKeliling(){
    inputKeliling.value="";
    var tampil = document.getElementById('hasilKeliling').innerHTML="";
}

