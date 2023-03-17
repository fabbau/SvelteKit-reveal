<script>
  import svelteDefinition from '$lib/icons/Svelte_definition.png'
</script>

<section
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

