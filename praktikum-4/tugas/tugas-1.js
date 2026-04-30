class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    return `ID: ${this.id}, Nama: ${this.nama}, Harga: ${this.harga}, Stok: ${this.stok}`;
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (this.stok - jumlah < 0) {
      console.log("Stok tidak cukup!");
    } else {
      this.stok -= jumlah;
    }
  }
}

// ================= INHERITANCE =================

// Child 1
class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    super(id, nama, harga, stok); // ambil dari parent
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  // override
  info() {
    return super.info() + `, Ukuran: ${this.ukuranFile}MB, Format: ${this.formatFile}`;
  }

  download() {
    console.log(`${this.nama} sedang di-download`);
  }

  // override (tidak kurangi stok)
  jual() {
    console.log("Produk digital tidak mengurangi stok");
  }
}

// Child 2
class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  // override
  info() {
    return super.info() + `, Berat: ${this.beratGram}g, Dimensi: ${this.dimensi}`;
  }

  hitungOngkir(tarifPerKg) {
    return (this.beratGram / 1000) * tarifPerKg;
  }
}

// ================= PENGGUNAAN =================

const p1 = new ProdukDigital(1, "Ebook JS", 50000, 10, 5, "PDF");
const p2 = new ProdukFisik(2, "Laptop", 7000000, 3, 2000, "30x20x5");

console.log(p1.info());
console.log(p2.info());