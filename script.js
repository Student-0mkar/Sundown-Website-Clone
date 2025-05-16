// Locomotive JS

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

// PAGE 3 ( Fixed image pop-up animation )

var elemc = document.querySelector(".elem-con");
var fixImage = document.querySelector("#fixed-image");

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  var img = e.getAttribute("data-image");
  e.addEventListener("mouseenter", function () {
    fixImage.style.display = "block";
    fixImage.style.backgroundImage = `url(${img})`;
    fixImage.addEventListener("mouseenter", function () {
      fixImage.style.display = "block";
    });
  });
  e.addEventListener("mouseleave", function () {
    fixImage.style.display = "none";
  });
  fixImage.addEventListener("mouseleave", function () {
    fixImage.style.display = "none";
  });
});

// PAGE 4 ( Tab changing- Image changing animation )

const textItems = document.querySelectorAll(".text-item");
const imageSection = document.querySelector(".image-section");
const descElement = document.querySelector(".desc");

textItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from previous active item
    document.querySelector(".text-item.active").classList.remove("active");

    // Add active class to the clicked item
    item.classList.add("active");

    // Update the background image
    imageSection.className = "image-section " + item.dataset.bg;

    // Update the description
    descElement.textContent = item.dataset.desc;
  });
});

// PAGE 4 Horizontal Swiper Animation

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
