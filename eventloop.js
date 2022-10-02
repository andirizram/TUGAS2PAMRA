function proses(status_proses, waktu) {
    while (waktu > 0){
        waktu--;
    }
    console.log(status_proses);
}

console.log("\n[Proses akan dimulai...]")
console.log("[Memulai Tahap Pertama]")
proses("[Tahap Pertama Selesai]", 1000000000);
console.log("[Memulai Tahap Penengah]")
proses("[Tahap Pengengah Selesai]", 1000000000);
console.log("[Memulai Tahap Terakhir]")
proses("[Tahap Terakhir Selesai]", 1000000000);
console.log("[Proses Telah Selesai]\n");