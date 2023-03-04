import adapter from '@sveltejs/adapter-auto';

// import Highlight from 'reveal.js/plugin/highlight/highlight'
// import Markdown from 'reveal.js/plugin/markdown/markdown'
// import MathReveal from 'reveal.js/plugin/math/math'
// import RevealNotes from 'reveal.js/plugin/notes/notes'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
  // csrf: {
  //   checkOrigin: false
  // },
  // plugins: {
  //   reveal: {
  //     plugins: [
  //       Highlight,
  //       Markdown,
  //       MathReveal.MathJax2,
  //       MathReveal.KaTeX,
  //       RevealNotes
  //     ],
  //     hash: true,
  //     mathjax2: {
  //       config: 'TeX-AMS_HTML-full',
  //       TeX: {
  //         Macros: {
  //           R: '\\mathbb{R}',
  //           set: ['\\left\\{#1 \\; ; \\; #2\\right\\}', 2]
  //         }
  //       }
  //     }
  //   }

  // }
};

export default config;
