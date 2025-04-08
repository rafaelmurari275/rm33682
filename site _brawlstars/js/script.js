document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".flip-card");
  
    cards.forEach(card => {
      card.addEventListener("click", function () {
        card.classList.toggle("flip");
      });
    });
  });