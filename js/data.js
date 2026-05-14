// js/data.js
const dataProduk = [
    { 
        nama: "Buket uang Premium", 
        harga: "Rp. 100.000", 
        foto: "public/img/buket1.jpeg",
        deskripsi: "Buket uang cantik dengan susunan rapi, cocok untuk hadiah pernikahan atau wisuda.",
        wa: "6285262526261",
        prioritas: true
    },
    { 
        nama: "Buket bunga Mawar", 
        harga: "Rp. 200.000", 
        foto: "public/img/buket2.jpeg",
        deskripsi: "Buket bunga segar dengan pilihan warna elegan, sempurna untuk kado ulang tahun.",
        wa: "6285262526261",
        prioritas: true
    },
    { 
        nama: "Buket uang Biasa", 
        harga: "Rp. 100.000", 
        foto: "public/img/buket1.jpeg",
        deskripsi: "Buket uang cantik dengan susunan rapi.",
        wa: "6285262526261",
        prioritas: true 
    },
    { 
        nama: "Buket bunga Mini", 
        harga: "Rp. 80.000", 
        foto: "public/img/buket3.jpeg",
        deskripsi: "Buket bunga mini yang imut dan terjangkau.",
        wa: "6285262526261",
        prioritas: true 
    },
    { 
        nama: "Buket bunga Lily", 
        harga: "Rp. 200.000", 
        foto: "public/img/buket2.jpeg",
        deskripsi: "Buket bunga segar dengan pilihan warna elegan.",
        wa: "6285262526261",
        prioritas: false 
    }
];

// saring prioritas
const dataProdukPrioritas = dataProduk.filter(produk => produk.prioritas === true);