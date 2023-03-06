<!-- <section>
  <h1>Welcome to the Svelte Presentation!</h1>
  <p>Presented by [Your Name]</p>
</section>

<section data-transition="zoom">
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
</section>

<section data-transition="zoom-in fade-out">
  <h3>Hello data-transition: zoom-in fade-out</h3>
</section>

<section>
  <h3>Default</h3>
</section>

<section data-transition="convex">
  <h3>data-transition: convex</h3>
</section>

<section data-transition="convex-in concave-out">
  <h3>data-transition: convex-in concave-out</h3>
</section>

<section>
  <section data-transition="zoom">
    <h3>Default</h3>
  </section>
  <section data-transition="concave">
    <h3>data-transition: concave</h3>
  </section>
  <section data-transition="convex-in fade-out">
    <h3>data-transition: convex-in fade-out</h3>
  </section>
  <section>
    <h3>Default</h3>
  </section>
</section>

<section data-transition="none">
  <h3>data-transition: none</h3>
</section>

<section>
  <h3>Default</h3>
</section> -->

<script>
  import logo from '$lib/icons/image2.png';
</script>
<section>
  <h2>Layout Helper Examples</h2>
  <ul>
    <li><a href="#/fit-text">Big Text</a></li>
    <li><a href="#/stretch">Stretch</a></li>
    <li><a href="#/stack">Stack</a></li>
    <li><a href="#/hstack">HStack</a></li>
    <li><a href="#/vstack">VStack</a></li>
  </ul>
</section>

<section id="fit-text">
  <h2>Fit Text</h2>
  <p>Resizes text to be as large as possible within its container.</p>
  <pre><code class="html" data-trim data-line-numbers>
                                          <h2 class="r-fit-text">FIT</h2>
  </code></pre>
</section>

<section>
  <h2 class="r-fit-text">FIT</h2>
</section>

<section>
  <h2 class="r-fit-text">HELLO WORLD</h2>
  <h2 class="r-fit-text">BOTH THESE TITLES USE FIT-TEXT</h2>
</section>

<section id="stretch">
  <h2>Stretch</h2>
  <p>Makes an element as tall as possible while remaining within the slide bounds.</p>
  <pre>
    <code class="html" data-trim data-line-numbers>
      <h2>Stretch Example</h2>
      <img src={logo} class="r-stretch">
      <p>Image byline</p>
    </code>
  </pre>
</section>

<section>
  <h2>Stretch Example</h2>
  <img src={logo} class="r-stretch">
  <p>Image byline</p>
</section>

<section id="stack">
  <h2>Stack</h2>
  <p>Stacks multiple elements on top of each other, for use with fragments.</p>
  <pre>
    <code class="html" data-trim data-line-numbers>
      <div class="r-stack">
        &lt;img class="fragment" width="450" height="300" src="..."&gt;
        &lt;img class="fragment" width="300" height="450" src="..."&gt;
        &lt;img class="fragment" width="400" height="400" src="..."&gt;
      </div>
    </code>
  </pre>
</section>

<section>
  <h2>Stack Example</h2>
  <div class="r-stack">
    <p class="fragment fade-in-then-out">One</p>
    <p class="fragment fade-in-then-out">Two</p>
    <p class="fragment fade-in-then-out">Three</p>
    <p class="fragment fade-in-then-out">Four</p>
  </div>
  <div class="r-stack">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="https://placekitten.com/450/300" width="450" height="300" class="fragment">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="https://placekitten.com/300/450" width="300" height="450" class="fragment">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="https://placekitten.com/400/400" width="400" height="400" class="fragment">
  </div>
</section>

<section>
  <h2>Stack Example</h2>
  <p>fade-in-then-out fragments</p>
  <div class="r-stack">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="https://placekitten.com/450/300" width="450" height="300" class="fragment fade-in-then-out">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="https://placekitten.com/300/450" width="300" height="450" class="fragment fade-in-then-out">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="https://placekitten.com/400/400" width="400" height="400" class="fragment fade-in-then-out">
  </div>
</section>

<section id="hstack">
  <h2>HStack</h2>
  <p>Stacks multiple elements horizontally.</p>
  <pre><code class="html" data-trim data-line-numbers>
                                          <div class="r-hstack">
                                            &lt;img width="450" height="300" src="..."&gt;
                                            &lt;img width="300" height="450" src="..."&gt;
                                            &lt;img width="400" height="400" src="..."&gt;
                                          </div>
  </code></pre>
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
    <code class="html" data-trim data-line-numbers>
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
