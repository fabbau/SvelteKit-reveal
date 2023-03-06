<script>
    import Reveal from 'reveal.js';
    import Markdown from 'reveal.js/plugin/markdown/markdown.js';
    import Highlight from 'reveal.js/plugin/highlight/highlight.js';
    import MathReveal from 'reveal.js/plugin/math/math';
    import RevealNotes from 'reveal.js/plugin/notes/notes';
    import 'reveal.js/dist/reveal.css';
    import 'reveal.js/dist/theme/black.css';
    import 'reveal.js/plugin/highlight/monokai.css';
    import { onMount, onDestroy } from 'svelte';

    import PresentationItem from './PresentationItem.svelte'
    import PresentationItem2 from './PresentationItem2.svelte'
  
  
    /**
     * @type {Reveal.Api}
     */
    let deck;
    onMount(() => {
      console.log('presi mounted');
      // @ts-ignore
      deck = new Reveal(document.querySelector('.deck'), {
        embedded: true,
        center: true,
        transition: 'slide',
        transitionSpeed: 'slow',
        backgroundTransition: 'slide',
        keyboardCondition: 'focused', // only react to keys when focused
        plugins: [Markdown, Highlight, RevealNotes, MathReveal]
      });
      deck.initialize();
      console.log('deck');
    //   console.log(typeof deck);
    //   console.log(deck);
    });
  
    onDestroy(() => {
      if (deck) deck.destroy();
    });
  </script>
  
  <div class="presentation-wrapper">
    <div class="reveal deck">
      <div class="slides">
        <PresentationItem />
        <PresentationItem2 />
      </div>
    </div>
  </div>
  
  <style>
    .presentation-wrapper {
      height: 50vh;
    }
  </style>
  