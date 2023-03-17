<script>
  import { onMount } from 'svelte'

  // import background from '$lib/icons/svelte-machine-d38a22bc.avif'
  import logo from '$lib/icons/image2.png'
  // import logoSvelte from '$lib/icons/Svelte_Logo.svg'
  // import svelteDefinition from '$lib/icons/Svelte_definition.png'
  // import RiMoneyDollarCircleLine from '$lib/icons/RiMoneyDollarCircleLine.svelte'


  onMount(() => {
    // Replace all occurrences of "*{}" in <code> elements innerHTML
    let codeElement = document.getElementsByTagName('code')

    for (let i = 0; i < codeElement.length; i++) {
      codeElement[i].innerHTML = codeElement[i].innerHTML.replace(/\*\{\}/g, '')
    }
  })

</script>













<section
  data-background-iframe="https://svelte.dev/repl/76de39688a0349a788151d2831eabcd5?version=3.26.0"
  data-preload
>
  <div
    style="position: absolute; width: 40%; right: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.5), 0 5px 25px rgba(0,0,0,0.2); background-color: rgba(0, 0, 0, 0.9); color: #fff; padding: 20px; font-size: 20px; text-align: left;"
  >
    <h2>Iframe Backgrounds</h2>
    <p>
      Since reveal.js runs on the web, you can easily embed other web content. Try interacting with
      the page in the background.
    </p>
  </div>
</section>

<section>
  <section
    data-auto-animate
    data-auto-animate-id="templating2"
  >
    <h2>Templating</h2>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="templating2"
  >
    <h2>Templating</h2>

    <pre data-id="templates">
      <code
        class="html"
        data-trim
        data-line-numbers>
        <script>
          {`import logoSvelte from '$lib/icons/Svelte_Logo.svg'`}
        </script>
  
        <h2>Hello Svelte</h2>
        {`<img src={logoSvelte} alt="logo"/>`}
  
        <style>
          h2 {
            font-size: '1.4rem';
          }
        </style>
      </code>
    </pre>
  </section>
</section>



<section>
  <h2 class="r-fit-text">HELLO WORLD</h2>
  <h2 class="r-fit-text">BOTH THESE TITLES USE FIT-TEXT</h2>
</section>

<section id="stretch">
  <h2>Stretch</h2>
  <p>Makes an element as tall as possible while remaining within the slide bounds.</p>
  <pre>
    <code
      class="html"
      data-trim
      data-line-numbers>
      <h2>Stretch Examplle</h2>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src={logo}
        class="r-stretch"
      />
      <p>Image byline</p>
    </code>
  </pre>
</section>

<section>
  <h2>Stretch Example</h2>
  <!-- svelte-ignore a11y-missing-attribute -->
  <img
    src={logo}
    class="r-stretch"
  />
  <p>Image byline</p>
</section>

<section id="stack">
  <h2>Stack</h2>
  <p>Stacks multiple elements on top of each other, for use with fragments.</p>
  <pre>
    <code
      class="html"
      data-trim
      data-line-numbers>
      <div class="r-stack">
        &lt;img class="fragment" width="450" height="300" src="..."&gt;
        <img
          class="fragment"
          width="300"
          height="450"
          src="..."
        />
        &lt;img class="fragment" width="400" height="400" src="..."&gt;
      </div>
    </code>
  </pre>
</section>

<section>
  <h2>Stack Exampleeee</h2>
  <div class="r-stack">
    <p class="fragment fade-in-then-out">One</p>
    <p class="fragment fade-in-then-out">Two</p>
    <p class="fragment fade-in-then-out">Three</p>
    <p class="fragment fade-in-then-out">Four</p>
  </div>
  <div class="r-stack">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img
      src="https://placekitten.com/450/300"
      width="450"
      height="300"
      class="fragment"
    />
    <!-- svelte-ignore a11y-missing-attribute -->
    <img
      src="https://placekitten.com/300/450"
      width="300"
      height="450"
      class="fragment"
    />
    <!-- svelte-ignore a11y-missing-attribute -->
    <img
      src="https://placekitten.com/400/400"
      width="400"
      height="400"
      class="fragment"
    />
  </div>
</section>

<section>
  <h2>Stack Example</h2>
  <p>fade-in-then-out fragments</p>
  <div class="r-stack">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img
      src="https://placekitten.com/450/300"
      width="450"
      height="300"
      class="fragment fade-in-then-out"
    />
    <!-- svelte-ignore a11y-missing-attribute -->
    <img
      src="https://placekitten.com/300/450"
      width="300"
      height="450"
      class="fragment fade-in-then-out"
    />
    <!-- svelte-ignore a11y-missing-attribute -->
    <img
      src="https://placekitten.com/400/400"
      width="400"
      height="400"
      class="fragment fade-in-then-out"
    />
  </div>
</section>

<section id="hstack">
  <h2>HStack</h2>
  <p>Stacks multiple elements horizontally.</p>
  <pre>
    <code
      class="html"
      data-trim
      data-line-numbers>
      <div class="r-hstack">
        &lt;img width="450" height="300" src="..."&gt;
        &lt;img width="300" height="450" src="..."&gt;
        &lt;img width="400" height="400" src="..."&gt;
      </div>
    </code>
  </pre>
</section>

<section data-auto-animate>
  <h2>HStack Example</h2>
  <div class="r-hstack">
    <p style="padding: 0.50em; background: #eee; margin: 0.25em">One</p>
    <p style="padding: 0.75em; background: #eee; margin: 0.25em">Two</p>
    <p style="padding: 1.00em; background: #eee; margin: 0.25em">Three</p>
  </div>
</section>

<section id="vstack">
  <h2>VStack</h2>
  <p>Stacks multiple elements vertically.</p>
  <pre>
    <code
      class="html"
      data-trim
      data-line-numbers>
      <div class="r-vstack">
        &lt;img width="450" height="300" src="..."&gt;
        &lt;img width="300" height="450" src="..."&gt;
        &lt;img width="400" height="400" src="..."&gt;
      </div>
    </code>
  </pre>
</section>

<section data-auto-animate>
  <h2>VStack Example</h2>
  <div class="r-vstack">
    <p style="padding: 0.50em; background: #eee; margin: 0.25em">One</p>
    <p style="padding: 0.75em; background: #eee; margin: 0.25em">Two</p>
    <p style="padding: 1.00em; background: #eee; margin: 0.25em">Three</p>
  </div>
</section>
