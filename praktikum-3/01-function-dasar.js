function sapa() {
    console.log('Halo! Selamat datang di praktikum javaScript.');
}
sapa();     
sapa();     

function sapaNama(nama) {
    console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama('Budi');
sapaNama('Siti');

function tambah(angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil;
}

// Latihan 1 function

const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7, 13));

function hitung(nilai, pengali = 2) {
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5 , 3));

const pesanGlobal = 'Saya ada di mana saja';

function cekScope() {
    const pesanLokal = 'Saya ada di mana saja';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}

cekScope();
console.log(pesanGlobal);

function kurang (a, b) {
    const hasil = a - b;
    return hasil;
}

const hasilpengurangan = kurang (20, 15);
console.log('20 - 15 = ', hasilpengurangan);

function kali (a, b) {
    const hasil = a * b;
    return hasil;
}

const hasilperkalian = kali (20, 15);
console.log('20 * 15 =', hasilperkalian);

function bagi(a,b) {
    if (b === 0) {
    console.log('Error: tidak bisa membagi dengan nol');
    return null;
}
    return a / b;  //return untuk mengembalikan hasilnya
}
console.log(bagi (10,2));
console.log(bagi (10,0));

function kalkulator(a, operator, b) {
    if (operator === '+') {
        return tambah(a,b); }

    else if (operator === '-'){
        return kurang(a,b); }

    else if (operator === '*') {
        return kali(a,b); }

    else if (operator === '/') {
        return bagi(a,b); }

    else {
        console.log('Operator tidak dikenali');
        return null; }
    }

console.log('=== Hasil Kalkulator ===');

console.log(kalkulator(10, '+',2));
console.log(kalkulator(10, '-',5));
console.log(kalkulator(5, '*',5));
console.log(kalkulator(15, '/',5));
console.log(kalkulator(10, '/',0));