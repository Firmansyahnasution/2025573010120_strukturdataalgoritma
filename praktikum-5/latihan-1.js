// Latihan 1: Identifikasi Kompleksitas

function ukurWaktu(label, fn) {
    const mulai = Date.now();
    fn();
    const selesai = Date.now();
    console.log(`${label}: ${selesai - mulai} ms`);
}

//fungsi A Big O: O(1) = hanya satu operasi matematika
function fungsiA(n) {
    return n * 2;
}

//fungsi B O: O(n²) = dua loop bersambung
function fungsiB(n) {
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++);
        
}

//fungsi C Big O : O(Log n) = i dikali 2 setiap iterasi
function fungsiC(n) {
    for (let i = 1; i < n; i *= 2);
        
}

//fungsi D Big O: O(n³) = 3 nested loop
function fungsiD(arr) {
    arr.forEach(x =>
    arr.forEach(y =>
    arr.forEach(z =>
    null
)
)
);
}

console.log("=== Latihan 1: Kompleksitas ===");

const n = 1000;
const arr = Array.from({ length: 100 }, (_, i) => i);

ukurWaktu("Fungsi A O(1)", () => fungsiA(n));
ukurWaktu("Fungsi B O(n²)", () => fungsiB(n));
ukurWaktu("Fungsi C O(log n)", () => fungsiC(n));

ukurWaktu("Fungsi D O(n³)", () => fungsiD(arr));