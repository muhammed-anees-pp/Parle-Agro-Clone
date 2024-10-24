let lastScrollTop = 0;
let rotation = 0;

window.addEventListener("scroll", function() {
  const img = document.getElementById("spinner");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    rotation += 3;
  } else {
    // Scrolling up
    rotation -= 3;
  }

  img.style.transform = `rotate(${rotation}deg)`;
  lastScrollTop = scrollTop;
});