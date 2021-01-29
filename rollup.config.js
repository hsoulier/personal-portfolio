import commonjs from "@rollup/plugin-commonjs"
import noderesolve from "@rollup/plugin-node-resolve"
import css from "rollup-plugin-css-only"
import multiInput from "rollup-plugin-multi-input";

export default {
  input: ["src/js/*.js"],
  output: {
    sourcemap: true,
    format: "esm",
    dir: "public",
  },
  plugins: [multiInput(), css({ output: "css/script-style.css" }), commonjs(), noderesolve()],
}
