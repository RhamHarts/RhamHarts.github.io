// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar-dark");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});


 // Function to handle image zoom
 document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel-item img, .card-img-top");

  images.forEach((img) => {
      img.addEventListener("click", function () {
          const zoomOverlay = document.createElement("div");
          zoomOverlay.classList.add("zoom-overlay");

          const zoomedImg = document.createElement("img");
          zoomedImg.src = img.src;

          zoomOverlay.appendChild(zoomedImg);
          document.body.appendChild(zoomOverlay);

          zoomOverlay.addEventListener("click", function () {
              document.body.removeChild(zoomOverlay);
          });
      });
  });
});