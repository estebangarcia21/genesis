import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
    strict: false
  },
  plugins: [ typescript({ tsconfig: 'tsconfig.rollup.json' })]
};

export default config;
