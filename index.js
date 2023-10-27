function cekKondisiAir(suhu) {
    if (suhu >= -100 && suhu <= 0) {
        return "Beku";
    } else if (suhu >= 1 && suhu <= 100) {
        return "Cair";
    } else if (suhu >= 101 && suhu <= 500) {
        return "Uap";
    } else {
        return "Tidak Terdefinisi";
    }
}

function cekBahanBakar(plat, cc) {
    if (plat === "kuning" || plat === "motor") {
        return "BBM Subsidi";
    } else if (cc < 1500) {
        return "PERTAMAX";
    } else {
        return "PERTAMAX Turbo";
    }
}

// Contoh penggunaan:
console.log(cekKondisiAir(-50)); // Output: Beku
console.log(cekKondisiAir(25));  // Output: Cair
console.log(cekKondisiAir(150)); // Output: Uap
console.log(cekKondisiAir(600)); // Output: Tidak Terdefinisi

console.log(cekBahanBakar("kuning", 1200)); // Output: BBM Subsidi
console.log(cekBahanBakar("putih", 1600));  // Output: PERTAMAX Turbo
