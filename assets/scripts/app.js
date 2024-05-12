/* -------------------------- script for nav links -------------------------- */
const navLinks = document.querySelector('.nav-links');

navLinks.addEventListener('click', (e) => {
  console.log(e.currentTarget)
  if(e.target.nodeName === 'A') {
    Array.from(e.currentTarget.children).forEach(navLink => {
      navLink.firstElementChild.classList.remove('active');
    });
    e.target.classList.add('active');
  }
});

/* ----------------------- initializing swiper sliders ---------------------- */
new Swiper('.swiper1', {
  allowTouchMove: false,
  loop: true,
  slidesPerView: 'auto',
  freeMode: true,
  autoplay: {
    delay: 10,
    disableOnInteraction: false,
  },
  speed: 5000
});

new Swiper('.swiper2', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 60,
  freeMode: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  speed: 2000
});

new Swiper('.swiper3', {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

/* --------------------------- script for tabbing --------------------------- */
const tabs = document.querySelector('#services .tabs');

tabs.addEventListener('click', (e) => {
  //resetting all the tabs first
  Array.from(e.currentTarget.children).forEach(tab => {
    tab.classList.remove('active');
  });
  e.target.classList.add('active');
});

/* -------------------------- script for accordion -------------------------- */
const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', (e) => {
  const itemClicked = e.target.closest('.accordion-item');
  if(itemClicked) {
    Array.from(e.currentTarget.children).forEach(accordionItem => {
      accordionItem.classList.remove('active');
    });
    console.log('e.target.closest', itemClicked)
    itemClicked.classList.add('active');
  }
})