import "../scss/admin/index.scss"
const linkNav = document.querySelectorAll(".admin-nav__link")
console.log("Hello admin")

const getAllProjects = async (el) => {
    const response = await fetch(`/api/${el}`)
    const projects = response.json()
    return projects
}

Array.from(linkNav).forEach((el) => {
    el.addEventListener("click", (link) => {
        const section = el.dataset.link
        fetch(`/api/${section}`)
            .then((response) => {
                console.log(response.json())
            })
            .catch(function (err) {
                console.log("Fetch Error :-S", err)
            })
    })
})
