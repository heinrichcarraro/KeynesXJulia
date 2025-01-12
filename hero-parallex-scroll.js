window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  document.querySelector(".hero-image").style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  document.querySelector(".hero-text").style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
