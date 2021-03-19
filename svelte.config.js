const preprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

const options = {
  defaults: {
    style: 'sass',
  },
  sass: {
    prependData: `@import '${__dirname}/src/sass/media.sass'`,
    renderSync: true,
  },
  postcss: {
    plugins: [autoprefixer],
  },
};

module.exports = {
  preprocess: preprocess(options),
  options,
};
