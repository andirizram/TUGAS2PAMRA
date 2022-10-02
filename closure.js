function nama_lengkap(nama_awal){
    return function(nama_tengah){
        return function(nama_akhir){
            return nama_awal+" "+nama_tengah+" "+nama_akhir;
        }
    }
}

var nama1 = nama_lengkap("\nAndika");
var nama2 = nama1("Rizki");
var nama3 = nama2("Ramadhan\n");


console.log(nama3); // Andika Rizki Ramadhan
