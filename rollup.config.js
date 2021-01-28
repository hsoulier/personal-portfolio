import commonjs from "@rollup/plugin-commonjs"
import noderesolve from "@rollup/plugin-node-resolve"
import css from "rollup-plugin-css-only"

export default {
  input: "public/js/src/index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/js/index.js",
  },
  plugins: [css({ output: "bundle.css" }), commonjs(), noderesolve()],
}
