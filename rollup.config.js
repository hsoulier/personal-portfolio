import commonjs from "@rollup/plugin-commonjs"
import noderesolve from "@rollup/plugin-node-resolve"
import css from "rollup-plugin-css-only"
import multiInput from "rollup-plugin-multi-input"
import json from "@rollup/plugin-json"
import scss from "rollup-plugin-scss"
const rimraf = require("rimraf")


const mode = process.env.NODE_ENV !== "production"

console.log(mode)

rimraf("./public/js", () => {
    console.log("public/js removed")
})
rimraf("./public/css", () => {
    console.log("public/css removed")
})

export default {
    input: ["src/js/*.js"],
    output: {
        sourcemap: mode,
        format: "esm",
        dir: "public",
    },
    plugins: [
        multiInput(),
        scss({
            output: "./public/css/main.css",
            failOnError: true,
        }),
        css({ output: "css/script-style.css" }),
        json(),
        commonjs(),
        noderesolve(),
    ],
}
