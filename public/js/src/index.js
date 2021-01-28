import Swiper, { Navigation } from "swiper"
import "swiper/swiper-bundle.css"
import feather from "feather-icons"

Swiper.use([Navigation])
console.log("Hello World")
const page = {
  burger: document.querySelector(".nav__burger"),
}
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: 1,
  speed: 400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

page.burger.addEventListener("click", () => {
  page.burger.classList.toggle("active")
})

feather.replace()