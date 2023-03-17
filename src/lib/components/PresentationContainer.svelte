<script>
    import Reveal from 'reveal.js';
    import Markdown from 'reveal.js/plugin/markdown/markdown.js';
    import Highlight from 'reveal.js/plugin/highlight/highlight.js';
    import MathReveal from 'reveal.js/plugin/math/math';
    import RevealNotes from 'reveal.js/plugin/notes/notes';
    import 'reveal.js/dist/reveal.css';
    import 'reveal.js/plugin/highlight/monokai.css';
    // import 'reveal.js/dist/theme/black.css';
    import 'reveal.js/dist/theme/solarized.css';
    import { onMount, onDestroy } from 'svelte';

    import PresentationItemStart from './PresentationItemStart.svelte'
    import PresentationItemAbout from './PresentationItemAbout.svelte'
    import PresentationItemKeyFeatures from './PresentationItemKeyFeatures.svelte'
    import PresentationItemTemplating from './PresentationItemTemplating.svelte'
    import PresentationItemReactivity from './PresentationItemReactivity.svelte'
    import PresentationItemStateManagement from './PresentationItemStateManagement.svelte'


    import PresentationItemResources from './PresentationItemResources.svelte'
    
    import PresentationItem from './PresentationItem.svelte'
    import PresentationItem2 from './PresentationItem2.svelte'
  

    import logoSvelte from '$lib/icons/Svelte_Logo.svg'
    import parallaxBackground from '$lib/icons/svelte-machine-d38a22bc.avif'
    import parallaxBackground30 from '$lib/icons/svelte-kit-machine.3af040cb-transparent30.png'
    import parallaxBackground15 from '$lib/icons/svelte-kit-machine.3af040cb-transparent15.png'

    import './presentation-styles.css'
  
    /**
     * @type {Reveal.Api}
     */
    let deck;
    onMount(() => {
      console.log('presi mounted');
      // @ts-ignore
      deck = new Reveal(document.querySelector('.deck'), {
        
        // Parallax background image
        parallaxBackgroundImage: `${parallaxBackground15}`,
        parallaxBackgroundSize: '120vw 100vh', // CSS syntax, e.g. "2100px 900px" - currently only pixels are supported (don't use % or auto)
        parallaxBackgroundHorizontal: 50,
        parallaxBackgroundVertical: 50,

        width: 1150,
        // height: 900,

        controls: true,
        progress: true,
        history: true,
        embedded: true,
        center: true,
        help: true, // Show help overlay when ? is pressed
        transition: 'convex', // default / none / slide / concave / convex / zoom
        backgroundTransition: 'convex', // default / none / fade / slide / convex / concave/ zoom
        transitionSpeed: 'slow', // default / fast / slow
        keyboardCondition: 'focused', // only react to keys when focused
        plugins: [Markdown, Highlight, RevealNotes, MathReveal]
      });
      deck.initialize();
      console.log('deck');
    });
  
    onDestroy(() => {
      if (deck) deck.destroy();
    });
  </script>
  
  <div class="presentation-wrapper">
    <div class="reveal deck">
      <img class="background-logo" src={logoSvelte} alt="svelte logo">
      <div class="slides">
        <PresentationItemStart />
        <PresentationItemAbout />
        <PresentationItemKeyFeatures />
        <PresentationItemTemplating />
        <PresentationItemReactivity />
        <PresentationItemStateManagement />
        
        <PresentationItemResources />


        <PresentationItem />

        <!-- <PresentationItem2 /> -->

      </div>
    </div>
  </div>
  
  <style>
    .presentation-wrapper {
      height: 60vh;
      
      /* background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
        url("$lib/icons/Svelte_Logo.svg"); */
    }
  </style>
  