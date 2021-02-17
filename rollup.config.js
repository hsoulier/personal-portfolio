import commonjs from "@rollup/plugin-commonjs"
import noderesolve from "@rollup/plugin-node-resolve"
import css from "rollup-plugin-css-only"
import multiInput from "rollup-plugin-multi-input"
import json from "@rollup/plugin-json"
import scss from "rollup-plugin-scss"
const rimraf = require("rimraf")

const prod = process.env.NODE_ENV === "production"
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
            output: "./public/css/main.css",
            failOnError: true,
        }),
        css({ output: "css/script-style.css" }),
        json(),
        commonjs(),
        noderesolve(),
    ],
}
