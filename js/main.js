// Function untuk memuat file HTML ke dalam container tertentu
function loadComponent(url, containerId, callback = null) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Gagal memuat ${url}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
      
      // Jika ada script tambahan yang perlu dijalankan setelah HTML dimuat, jalankan callback
      if (callback) callback();
    })
    .catch((error) => console.error("Error loading component:", error));
}

// Memanggil function untuk Navigasi
loadComponent("navigasi.html", "nav-container", function() {
  // Add toggle menu function after nav is loaded
  window.toggleMenu = function() {
    const list = document.querySelector('.list');
    list.classList.toggle('show');
  };
});

// Memanggil function untuk Footer
loadComponent("footer.html", "footer-container", function() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});