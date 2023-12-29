document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });
});


// FAQ
document.addEventListener("DOMContentLoaded", () => {
  const faq_el = document.getElementsByClassName('faq-item');

  // add event listeners
  for (let i = 0; i < faq_el.length; i++) {
    faq_el[i].addEventListener("click", () => {
      faq_el[i].classList.toggle("active");
    });
  }
});

// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileMenu = document.getElementById('mobileMenu');

  // toggle mobile menu
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    // change icon according to mobile nav state
    const mobileNavActiveState = mobileMenu.classList.contains("active");
    hamburgerBtn.setAttribute("class", mobileNavActiveState ? "fa-solid fa-xmark fa-2x hamburger-btn" : "fa-solid fa-bars fa-2x hamburger-btn");
  });

  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");

    // change icon according to mobile nav state
    const mobileNavActiveState = mobileMenu.classList.contains("active");
    hamburgerBtn.setAttribute("class", mobileNavActiveState ? "fa-solid fa-xmark fa-2x hamburger-btn" : "fa-solid fa-bars fa-2x hamburger-btn");
  });
});

