function kuadratBiasa(x) {
    return x * x;
}

const kuadrat = (x) => {
    return x * x;
};

const kuadratRingkas = x => x * x;

console.log('=== Perbandingan Penulisan ===');
console.log('Biasa   :', kuadratBiasa(5));
console.log('Arrow   :', kuadrat(5));
console.log('Ringkas   :', kuadratRingkas(5));

const luas = (panjang, lebar) => panjang * lebar ;
const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;

console.log('Luas 4x6 :', luas(4, 6));
console.log(salam('Budi', 'pagi'));

function lakukanOperasi(angka, operasiCallback) {
    console.log (`Angka awal : ${angka}`);
    const hasil = operasiCallback(angka);
    console.log(`Hasil setelah operasi: ${hasil}`);
}

console.log('\n=== callback ===');
lakukanOperasi(7, kuadratRingkas);
lakukanOperasi(10, x => x + 100);
lakukanOperasi(20, function(x) {
    return x /2;
});

console.log('\n=== setTimeout (Callback) ===');
console.log('Pesan 1: Sebelum timer');

setTimeout(() => {
    console.log('Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)');
}, 1000);

//tugas 2 pipeline 

const keHurufBesar = (teks) => {
    return teks.toUpperCase();
};

const tambahSeru = (teks) => {
    return teks + '!!!';
};

const hitungKata = (teks) => {
    return teks.split(' ').length;
};

function prosesKalimat(kalimat, callback) {
    console.log(`\nKalimat awal: ${kalimat}`);
    const hasil = callback(kalimat);
    console.log(`Hasil setelah proses: ${hasil}`);
}


console.log('\n=== Latihan 2: Callback ===');

const kalimat = 'belajar javascript itu menyenangkan';
prosesKalimat(kalimat, keHurufBesar);
prosesKalimat(kalimat, tambahSeru);
prosesKalimat(kalimat, hitungKata);
prosesKalimat(kalimat, (teks) => teks.split('').reverse().join(''));
