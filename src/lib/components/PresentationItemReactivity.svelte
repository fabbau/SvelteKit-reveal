<script>
  // import { onMount } from 'svelte'

  // import background from '$lib/icons/svelte-machine-d38a22bc.avif'
  // import logo from '$lib/icons/image2.png'
  // import logoSvelte from '$lib/icons/Svelte_Logo.svg'
  // import svelteDefinition from '$lib/icons/Svelte_definition.png'
  // import RiMoneyDollarCircleLine from '$lib/icons/RiMoneyDollarCircleLine.svelte'


  // onMount(() => {
  //   // Replace all occurrences of "*{}" in <code> elements innerHTML
  //   let codeElement = document.getElementsByTagName('code')

  //   for (let i = 0; i < codeElement.length; i++) {
  //     codeElement[i].innerHTML = codeElement[i].innerHTML.replace(/\*\{\}/g, '')
  //   }
  // })

</script>


<!-- Reactivity -->
<section>
  <section
    data-auto-animate
    data-auto-animate-id="reactivity"
  >
    <h2 class="r-fit-text">Reactivity</h2>
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
        data-line-numbers="2|2,10|2,5,10">
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

