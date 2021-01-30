import "../scss/main.scss"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import feather from "feather-icons"
import Swiper, { Navigation } from "swiper"
import "swiper/swiper-bundle.css"

gsap.registerPlugin(ScrollTrigger)

// Page structure
let page = {
    burger: document.querySelector(".nav__burger"),
    navlinksContainer: document.querySelector(".nav__links"),
    navlinks: Array.from(document.querySelectorAll(".nav__links a")),
    contactForm: document.querySelector(".contact__form"),
}

// Slider swiperJS
Swiper.use([Navigation])
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

// Home Animations
if (document.querySelector(".introduction")) {
    page = {
        ...page,
        intro: {
            section: document.querySelector(".introduction"),
            bonjour: document.querySelector(".introduction__bonjour"),
            imageContainer: document.querySelector(
                ".introduction__image-container"
            ),
            image: document.querySelector(".introduction__image-container img"),
            description: Array.from(
                document.querySelectorAll(".introduction__description > * > *")
            ),
            cta: document.querySelector(".introduction "),
        },
        contact: {
            section: document.getElementById("contact-section"),
            thumb: document.querySelector(".contact__thumb"),
        },
    }
    const tl = gsap.timeline({
        defaults: {
            ease: "power2.inOut",
        },
    })
    tl.to(page.intro.section, { visibility: "visible", duration: 0.05 })
        .from(page.intro.imageContainer, {
            y: -30,
            opacity: 0,
            duration: 0.5,
            onComplete: function () {
                this._targets[0].style.boxShadow =
                    "4px 4px 6px rgba(0, 0, 0, .16)"
            },
        })
        .from(page.intro.bonjour, {
            opacity: 0,
            duration: 0.4,
        })
        .from(
            page.intro.description,
            {
                translateY: "1rem",
                opacity: 0,
                stagger: 0.1,
            },
            "-=.3"
        )
    gsap.to(page.contact.thumb, {
        scrollTrigger: ".contact__thumb",
        translateX: 0,
        opacity: 1,
        duration: 2,
    })
}

// Menu Open Animation
const tlNavbar = gsap.timeline({
    reversed: true,
    defaults: {
        ease: "power2.inOut",
        duration: 0.15,
    },
})
const toggleDirection = (t) => {
    t.reversed(!t.reversed())
}
tlNavbar
    .to(".line-1", {
        translateY: 0,
    })
    .to(
        ".line-2",
        {
            translateY: 0,
        },
        "-=.15"
    )
    .to(".line-1", {
        rotate: 45,
        delay: 0.15,
    })
    .to(
        ".line-2",
        {
            rotate: -45,
        },
        "-=.15"
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
        duration: 0.5,
    })
page.burger.addEventListener("click", () => {
    toggleDirection(tlNavbar)
})

// Loading Feather icons
feather.replace()
