<script>
  import { onMount } from 'svelte'

  import background from '$lib/icons/svelte-machine-d38a22bc.avif'
  import logo from '$lib/icons/image2.png'
  import logoSvelte from '$lib/icons/Svelte_Logo.svg'
  import svelteDefinition from '$lib/icons/Svelte_definition.png'
  import RiMoneyDollarCircleLine from '$lib/icons/RiMoneyDollarCircleLine.svelte'

  import './presentation-styles.css'

  onMount(() => {
    // Replace all occurrences of "*{}" in <code> elements innerHTML
    let codeElement = document.getElementsByTagName('code')

    for (let i = 0; i < codeElement.length; i++) {
      codeElement[i].innerHTML = codeElement[i].innerHTML.replace(/\*\{\}/g, '')
    }
  })

</script>

<section>
  <a href="https://kit.svelte.dev/">
    <img
      src={background}
      alt="svelte machine"
      style="height: 180px; margin: 0 auto 4rem auto; background: transparent;"
    />
  </a>
  <h3>
    An Introduction to <a
      href="https://svelte.dev/"
      target="_blank"
      rel="noreferrer">Svelte</a
    > &
    <a
      href="https://kit.svelte.dev/"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    > <br />+ <br /> a comparison to
    <a
      href="https://reactjs.org/"
      target="_blank"
      rel="noreferrer">react</a
    >
  </h3>
  <p>
    <small>By Fatemeh Mohammadi, Mahammad Rahmanov and Fabian Bauer</small>
  </p>
</section>

<section
  data-background-image={background}
  data-background-opacity="0.2"
  data-transition="zoom-in"
>
  <!-- <section class="bg"> -->
  <!-- <section data-transition="zoom"> -->
  <section
    data-auto-animate
    data-auto-animate-id="agenda"
  >
    <h2>Agenda</h2>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="agenda"
  >
    <h2>Agenda</h2>
    <ul>
      <li>Introduction to Svelte</li>
      <li>Why Use Svelte?</li>
      <li>Getting Started with Svelte</li>
      <li>Svelte Components</li>
      <li>State Management in Svelte</li>
      <li>Svelte and the Web</li>
      <li>Conclusion</li>
    </ul>
    <aside class="notes">Shhh, these are your private notes 📝</aside>
  </section>
</section>

<section
  data-background-image={logoSvelte}
  data-background-position="top 20px right 20px"
  data-background-size="50px"
  data-transition="zoom-in"
>
  <section
    data-auto-animate
    data-auto-animate-id="about"
  >
    <h2 class="r-fit-text">About Svelte</h2>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="about"
  >
    <h2>About Svelte</h2>
    <p>Created by <span class="word-stand-out">Rich Harris</span> in November 2016</p>
    <aside class="notes">
      📝 e.g. he needed to render thousands of iFRAMEs and loading a complete JS framework or
      library in every single iFrame is not ideal => a lot of overhead is passed around
    </aside>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="about"
  >
    <h2>About Svelte</h2>
    <p>Created by <span class="word-stand-out">Rich Harris</span> in November 2016</p>
    <div class="r-hstack f-frame">
      <p class="stand-out">Need to improve performance</p>
      <p class="fragment stand-out">=> Reduce code to be shipped</p>
    </div>
    <aside class="notes">
      📝 e.g. he needed to render thousands of iFRAMEs and loading a complete JS framework or
      library in every single iFrame is not ideal => a lot of overhead is passed around
    </aside>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="about"
  >
    <h2>About Svelte</h2>
    <p>Created by <span class="word-stand-out">Rich Harris</span> in November 2016</p>
    <div class="r-hstack">
      <p class="stand-out">Need to improve performance</p>
      <p class="stand-out">=> Reduce code to be shipped</p>
    </div>
    <img
      src={svelteDefinition}
      alt="Svelte definition"
      width="400px"
    />
    <aside class="notes">
      📝 e.g. he needed to render thousands of iFRAMEs and loading a complete JS framework or
      library in every single iFrame is not ideal => a lot of overhead is passed around
    </aside>
  </section>
</section>

<!-- Key Features -->
<section data-transition="zoom-in">
  <section
    data-auto-animate
    data-auto-animate-id="key-features"
  >
    <h2 class="r-fit-text">What are the key features of svelte</h2>
  </section>
  <section
  data-auto-animate
  data-auto-animate-id="key-features"
  >
    <h2 class="r-fit-text">What are the key features of svelte</h2>
    <ul
      class="r-vstack"
      style="align-items: baseline;"
    >
      <li>Strong template engine</li>
      <li class="fragment">Reactivity</li>
      <li class="fragment">Built-in state management</li>
      <li class="fragment">Easy animations and transitions</li>
      <li class="fragment">Compiler-based approach</li>
      <li class="fragment">Efficient rendering</li>
      <li class="fragment">Easyly integrates with other libraries</li>
    </ul>
  </section>
</section>

<!-- Templating -->
<section>
  <section
    data-auto-animate
    data-auto-animate-id="templating"
  >
    <h2>Templating</h2>
    <pre style="background: bisque;">myComponente.svelte</pre>
    <pre data-id="templates">
      <code
        class="html"
        data-trim
        data-line-numbers>
        <h2>Hello Svelte</h2>
      </code>
    </pre>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="templating"
  >
    <h2>Templating</h2>
    <pre style="background: bisque;">myComponente.svelte</pre>
    <pre data-id="templates">
      <code
        class="html"
        data-trim
        data-line-numbers>
        <h2>Hello Svelte</h2>
        {`<img src={logoSvelte} alt="logo"/>`}
      </code>
    </pre>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="templating"
  >
    <h2>Templating</h2>
    <pre style="background: bisque;">myComponente.svelte</pre>
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
    <div class="fragment"
      style="position: absolute;width: 40%;right: 0;box-shadow: 0 1px 4px rgba(0,0,0,0.5), 0 5px 25px rgba(0,0,0,0.2);background-color: rgb(232 123 96 / 90%);color: #fff;padding: 12px;text-align: left;bottom: 51px;font-size: 2rem;"
    >
      <p>
        All styles are scoped by default!
      </p>
    </div>
  </section>
</section>

<section>
  <section
    data-auto-animate
    data-auto-animate-id="templating-demo"
  >
    <h2 data-id="templ">Templating #EACH</h2>
    <iframe
      style="width: 100%; height: 40vh;"
      title="svelte each-blocks"
      data-src="https://svelte.dev/repl/334dabd84e454f6898c04e782106b77e?version=3.56.0"
      data-preload
    />
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="templating-demo"
  >
    <h2 data-id="templ">Templating #AWAIT</h2>
    <iframe
      style="width: 100%; height: 40vh;"
      title="svelte await-blocks"
      data-src="https://svelte.dev/repl/3cecb02ab0cc41a9aaab00338ed0a0f0?version=3.56.0"
      data-preload
    />
  </section>
</section>


<!-- Reactivity -->
<section>
  <section
    data-auto-animate
    data-auto-animate-id="reactivity"
  >
    <h2>Reactivity</h2>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="reactivity"
  >
    <h2>Reactivity</h2>
    <p>Svelte has a powerful and flexible reactive system</p>
    <ul style="align-items: baseline;">
      <li>Reactive assignments</li>
      <li>Reactive declarations</li>
      <li>Reactive statements</li>
    </ul>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="reactivity"
  >
    <h2>Reactive assignments</h2>
    <pre data-id="reactivity-code">
      <code
        class="html"
        data-trim
        data-line-numbers>
        {`
          <script>
            let count = 0;
          
            function handleClick() {
              count += 1;
            }
          </script>
          
          <button on:click={handleClick}>
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
        `}
      </code>
    </pre>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="reactivity"
  >
    <h2>Reactive declarations</h2>
    <pre data-id="reactivity-code">
      <code
        class="html"
        data-trim
        data-line-numbers="2|2,4,5|4,5,16,17">
        {`
          <script>
            let count = 1;

            $: doubled = count * 2;
            $: quadrupled = doubled * 2;

            function handleClick() {
              count += 1;
            }
          </script>

          <button on:click={handleClick}>
            Count: {count}
          </button>

          <p>{count} * 2 = {doubled}</p>
          <p>{doubled} * 2 = {quadrupled}</p>
        `}
      </code>
    </pre>
  </section>
  <section
    data-auto-animate
    data-auto-animate-id="reactivity"
  >
    <h2>Reactive statements</h2>
    <pre data-id="reactivity-code">
      <code
        class="html"
        data-trim
        data-line-numbers="3-7">
        {`
          <script>
            let count = 0;

            $: if (count >= 10) {
              alert("count is dangerously high!");
              count = 9;
            }

            function handleClick() {
              count += 1;
            }
          </script>

          <button on:click={handleClick}>
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
        `}
      </code>
    </pre>
  </section>
</section>


<!-- State management -->
<section data-transition="zoom-in">
  <section
    data-auto-animate
    data-auto-animate-id="state-management"
  >
    <h2>State management</h2>
  </section>
  <section
  data-auto-animate
  data-auto-animate-id="state-management"
  >
    <h2>State management</h2>
    <ul
      style="align-items: baseline;"
    >
      <li>Strong template engine</li>
      <li class="fragment">Reactivity</li>
    </ul>
  </section>
</section>














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
