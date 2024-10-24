let lastScrollTop = 0;
let rotation = 0;

window.addEventListener("scroll", function() {
  const img = document.getElementById("spinner-leaf");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    rotation += 3;
  } else {
    rotation -= 3;
  }

  img.style.transform = `rotate(${rotation}deg)`;
  lastScrollTop = scrollTop;
});