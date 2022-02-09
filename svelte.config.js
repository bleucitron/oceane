import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

const config = {
  preprocess: preprocess({
    sass: {
      prependData: `@import 'src/sass/media.sass'`,
      renderSync: true,
    },
    postcss: {
      plugins: [autoprefixer],
    },
  }),
  kit: {
    adapter: vercel(),
  },
};

export default config;
