const style = document.createElement("style")

console.log(!CSS.supports("row-gap", "2rem"))
if (!CSS.supports("row-gap", "2rem") || !CSS.supports("column-gap", "1rem")) {
	style.innerHTML = `
	@media (min-width: 768px) {.nav__links > *+* {margin-left: 2rem;} .introduction__container > * + * {margin-left: 3rem;}} 
	.projects__container >* + * {margin-top: 5rem;}
	@media (max-width: 767px) {.nav__links > * + * {margin-top: 1rem;}}
	.form-row > *+* {margin-top: 1.5rem}
	@media (min-width: 950px) {.form-row > *+* {margin-left: clamp(20px, 3vw, 3.5rem);}}`
}
document.head.appendChild(style)
