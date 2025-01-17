// Script sederhana untuk memberikan alert ketika link di klik
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah aksi default
    alert(`Navigasi ke ${e.target.textContent} sedang disiapkan.`);
  });
});
