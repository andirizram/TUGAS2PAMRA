console.log("\nMenghitung Luas Persegi Panjang");
console.log("Dengan Panjang 21 Cm dan Lebar 13 Cm");


setTimeout(selesai,5000)
console.log("{Memproses Perhitungan Dengan Rumus}");

function selesai(){
    console.log("{Proses Telah Selesai}");
}

setTimeout(Proses_Kalkulasi,10000);
function Proses_Kalkulasi(){
    var panjang = 21;
    var lebar = 13 ;
    var luas = panjang * lebar;
    console.log("Luas persegi panjang tersebut adalah "+luas+"\n");
}