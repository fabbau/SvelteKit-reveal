<script>
  import background from '$lib/icons/svelte-machine-d38a22bc.avif'
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
    An Introduction to
    <a
      href="https://svelte.dev/"
      target="_blank"
      rel="noreferrer"
      >Svelte
    </a>
    &
    <a
      href="https://kit.svelte.dev/"
      target="_blank"
      rel="noreferrer"
      >SvelteKit
    </a>
    <br />+ <br /> a comparison to
    <a
      href="https://reactjs.org/"
      target="_blank"
      rel="noreferrer"
      >react
    </a>
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
    <h2 class="r-fit-text">Agenda</h2>
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
