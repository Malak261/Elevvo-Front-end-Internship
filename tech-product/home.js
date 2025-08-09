document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const prices = document.querySelectorAll(".price");
  const monthlyBtn = document.getElementById("monthlyBtn");
  const yearlyBtn = document.getElementById("yearlyBtn");

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", toggle.checked);
  });

  monthlyBtn.addEventListener("click", () => {
    prices.forEach((p) => (p.textContent = p.dataset.monthly));
    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");
  });

  yearlyBtn.addEventListener("click", () => {
    prices.forEach((p) => (p.textContent = p.dataset.yearly));
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
  });

  document.querySelectorAll(".faq").forEach((faq) => {
    faq.addEventListener("click", () => faq.classList.toggle("open"));
  });
  // Toggle FAQ answers
  document.querySelectorAll(".faq").forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("open"); // Toggle the open class
    });
  });
});
