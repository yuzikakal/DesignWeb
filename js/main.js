// Function untuk memuat file HTML ke dalam container tertentu
function loadComponent(url, containerId, callback = null) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Gagal memuat ${url}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
      
      if (callback) callback();
    })
    .catch((error) => console.error("Error loading component:", error));
}

// Memanggil function untuk Navigasi
loadComponent("navigasi.html", "nav-container", function() {
  // Toggle menu
  window.toggleMenu = function() {
    const list = document.querySelector('.list');
    list.classList.toggle('show');
  };

  // LOGIKA OTOMATIS ACTIVE LINK
  // Ambil nama file dari URL (contoh: "produk.html" dari "/folder/produk.html")
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Pilih semua tombol navigasi
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Loop dan cocokkan dengan URL saat ini
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Memanggil function untuk Footer
loadComponent("footer.html", "footer-container", function() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});