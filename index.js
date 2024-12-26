console.log("testing");
const cards = document.querySelectorAll(".card");
console.log(cards);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  { threshold: 0.5, rootMargin: "-100px" }
);

cards.forEach((card) => {
  observer.observe(card);
});
