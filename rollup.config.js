import commonjs from "@rollup/plugin-commonjs"
import noderesolve from "@rollup/plugin-node-resolve"
import css from "rollup-plugin-css-only"
import multiInput from "rollup-plugin-multi-input"
import scss from "rollup-plugin-scss"
const rimraf = require("rimraf")

rimraf("./public/js", () => {
    console.log("public/js removed")
})
rimraf("./public/css", () => {
    console.log("public/css removed")
})

export default {
    input: ["src/js/*.js"],
    output: {
        sourcemap: true,
        format: "esm",
        dir: "public",
    },
    plugins: [
        multiInput(),
        scss({
            output: "./public/css/style.css",
            failOnError: true,
        }),
        css({ output: "css/script-style.css" }),
        commonjs(),
        noderesolve(),
    ],
}
