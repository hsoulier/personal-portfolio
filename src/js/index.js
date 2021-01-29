import Swiper, { Navigation } from "swiper"
import gsap from "gsap"
import "swiper/swiper-bundle.css"
import feather from "feather-icons"

Swiper.use([Navigation])
console.log("Hello You 💻")
const page = {
  burger: document.querySelector(".nav__burger"),
  navlinksContainer: document.querySelector(".nav__links"),
  navlinks: Array.from(document.querySelectorAll(".nav__links a")),
  contactForm: document.querySelector(".contact__form"),
}
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 50,
  speed: 400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
const tlNavbar = gsap.timeline({
  reversed: true,
  defaults: {
    ease: "power2.inOut",
  },
})

tlNavbar
  .to(".line-1", {
    translateY: 0,
    duration: 0.1,
  })
  .to(
    ".line-2",
    {
      translateY: 0,
      duration: 0.1,
    },
    "-=.1"
  )
  .to(".line-1", {
    rotate: 45,
    delay: 0.2,
    duration: 0.1,
  })
  .to(
    ".line-2",
    {
      rotate: -45,
      duration: 0.1,
    },
    "-=.1"
  )
  .to(
    page.navlinksContainer,
    {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    },
    "-=.2"
  )
  .to(page.navlinks, {
    translateY: 0,
    stagger: 0.1,
  })

page.burger.addEventListener("click", () => {
  toggleDirection(tlNavbar)
})

function toggleDirection(t) {
  t.reversed(!t.reversed())
}

feather.replace()
