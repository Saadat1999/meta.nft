// MOBILE SCREEN CLICKS

const myBars = document.querySelector(".fa-bars")
const myDiv = document.querySelector(".mobile-links")
const closeIcon = document.querySelector(".fa-xmark")

myBars.addEventListener("click", () => {
    myDiv.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    myDiv.classList.remove("active");
});


// SWIPER JS

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  initialSlide: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 0.7,
    slideShadows: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});


// ACCORDION JS

  new Accordion('.accordion-container');
  new Accordion('.faq-accordion');

// twitter icon animate

