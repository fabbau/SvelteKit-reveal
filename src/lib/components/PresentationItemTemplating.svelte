<script>
  import { onMount } from 'svelte'

  onMount(() => {
    // Replace all occurrences of "*{}" in <code> elements innerHTML
    let codeElement = document.getElementsByTagName('code')

    for (let i = 0; i < codeElement.length; i++) {
      codeElement[i].innerHTML = codeElement[i].innerHTML.replace(/\*\{\}/g, '')
    }
  })
</script>


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
        {`
          <script>
            import logoSvelte from '$lib/icons/Svelte_Logo.svg'
          </script>
    
          <h2>Hello Svelte</h2>
          <img src={logoSvelte} alt="logo"/>
    
          <style>
            h2 {
              font-size: '1.4rem';
            }
         </style>
       `}
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
    <h2 data-id="templ"><span>Templating</span> #AWAIT</h2>
    <iframe
      style="width: 100%; height: 40vh;"
      title="svelte await-blocks"
      data-src="https://svelte.dev/repl/3cecb02ab0cc41a9aaab00338ed0a0f0?version=3.56.0"
      data-preload
    />
  </section>
</section>
