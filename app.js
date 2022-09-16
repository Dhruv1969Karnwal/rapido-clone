addEventListener("scroll", () => {
  if (window.scrollY > 200) {
      document.getElementById("invisible1").style.opacity = 1;
  } else if (window.scrollY < 200) {
      document.getElementById("invisible1").style.opacity = 0;
  }
});