// js/data.js
const dataProduk = [
    { 
        nama: "Round Buket Pita Satin", 
        harga: "Rp. 300.000", 
        foto: "public/img/buket17.jpeg",
        deskripsi: "Buket bunga round besar.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket uang Premium", 
        harga: "Rp. 100.000", 
        foto: "public/img/buket1.jpeg",
        deskripsi: "10 lembar 70.000, 20 lembar 120.000, 30 lembar 150.000, 40 lembar 200.000, 50 lembar 250.000, 100 lembar 450.000",
        wa: "6285262526261",
        prioritas: true
    },
    { 
        nama: "Buket Bunga", 
        harga: "Rp. 200.000", 
        foto: "public/img/buket2.jpeg",
        deskripsi: "Buket bunga segar dengan pilihan warna elegan, sempurna untuk kado ulang tahun.",
        wa: "6285262526261",
        prioritas: true
    },
    { 
        nama: "Buket uang Biasa", 
        harga: "Rp. 100.000", 
        foto: "public/img/buket4.jpeg",
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
        prioritas: false 
    },
    { 
        nama: "Buket bunga Kipas", 
        harga: "Rp. 70.000", 
        foto: "public/img/buket6.jpeg",
        deskripsi: "Buket uang 10 lembar.",
        wa: "6285262526261",
        prioritas: true 
    },
    { 
        nama: "Buket bunga Artificial", 
        harga: "Rp. 85.000", 
        foto: "public/img/buket7.jpeg",
        deskripsi: "7 tangkai bunga.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket Snack Beng-Beng", 
        harga: "Rp. 60.000", 
        foto: "public/img/buket8.jpeg",
        deskripsi: "Buket beng-beng.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket uang Kipas", 
        harga: "Rp. 70.000", 
        foto: "public/img/buket9.jpeg",
        deskripsi: "Buket uang 10 lembar.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket Uang Tulip", 
        harga: "Rp. 70.000", 
        foto: "public/img/buket10.jpeg",
        deskripsi: "Buket uang 10 lembar.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket Uang Love", 
        harga: "Rp. 140.000", 
        foto: "public/img/buket11.jpeg",
        deskripsi: "Jasa saja, uang di buket tidak termasuk.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket Uang Kipas", 
        harga: "Rp. 70.000", 
        foto: "public/img/buket12.jpeg",
        deskripsi: "Buket uang 10 lembar.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket Boneka", 
        harga: "Rp. 150.000", 
        foto: "public/img/buket13.jpeg",
        deskripsi: "Buket boneka + 3 cokelat silverqueen.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket bunga Artificial", 
        harga: "Rp. 100.000", 
        foto: "public/img/buket14.jpeg",
        deskripsi: "Buket bunga 10 tangkai.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Mini Round Bouquet", 
        harga: "Rp. 45.000", 
        foto: "public/img/buket15.jpeg",
        deskripsi: "Buket bunga mini yang imut dan lucu.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket Snack", 
        harga: "Rp. 50.000", 
        foto: "public/img/buket16.jpeg",
        deskripsi: "Buket berisi snack dan bunga.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket bunga Mini", 
        harga: "Rp. 80.000", 
        foto: "public/img/bungahandmade.jpg",
        deskripsi: "Buket bunga mini yang imut dan terjangkau.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket bunga Mini", 
        harga: "Rp. 80.000", 
        foto: "public/img/hp1.jpg",
        deskripsi: "Buket bunga mini yang imut dan terjangkau.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket bunga Mini", 
        harga: "Rp. 80.000", 
        foto: "public/img/hp2.jpg",
        deskripsi: "Buket bunga mini yang imut dan terjangkau.",
        wa: "6285262526261",
        prioritas: false 
    },
    { 
        nama: "Buket bunga Mini", 
        harga: "Rp. 80.000", 
        foto: "public/img/gelang.jpg",
        deskripsi: "Buket bunga mini yang imut dan terjangkau.",
        wa: "6285262526261",
        prioritas: false 
    },
];

// saring prioritas
const dataProdukPrioritas = dataProduk.filter(produk => produk.prioritas === true);