function kalimat(teks){
    var test = "Tidak Menggunakan";
    console.log(test+" "+teks);
    (function(teks){
            console.log(teks+" "+"Di Dalam Non IIFE");
    })(teks);
}

(function(teks){
    console.log("Ini"+" "+teks);
})("IIFE");

(function(){
    var tanpa_teks = "Dengan variable tanpa_teks juga IIFE";
    console.log(tanpa_teks);
})();

kalimat("IIFE"); 
