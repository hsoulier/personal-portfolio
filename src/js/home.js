import gsap from "gsap"

let page = {}
if (doncument.querySelector(".introduction")) {
  page = {
    intro: {
      imageContainer: document.querySelector(".introduction-_image-container"),
      image: document.querySelector(".introduction-_image-container img"),
    },
  }
}