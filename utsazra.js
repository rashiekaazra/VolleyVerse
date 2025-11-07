
document.addEventListener("DOMContentLoaded", () => {
  /* === JAM DIGITAL === */
  const clock = document.getElementById("clock");
  function updateClock() {
    if (!clock) return;
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("en-US", { hour12: false });
  }
  updateClock();
  setInterval(updateClock, 1000);

  const tombolDetail = document.querySelectorAll(".detail-btn")
tombolDetail.forEach((btn) => {
    btn.addEventListener("click", function () {
        const detail = this.nextElementSibling;
        detail.style.display = detail.style.display === "block" ? "none" : "block";
    });
});

  /* === ACCORDION === */
  const accordionButtons = document.querySelectorAll(".accordion-btn");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isActive = button.classList.contains("active");

      // buat nutup semua accordion yang lain
      accordionButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.style.display = "none";
      });

      // buat buka tutup tombol yang diklik
      if (!isActive) {
        button.classList.add("active");
        content.style.display = "block";
      }
    });
  });
});