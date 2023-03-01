<script>
  import { page } from '$app/stores';
  // import github from '$lib/images/github.svg';
</script>

<header>
  <nav>
    <ul>
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === '/coins' ? 'page' : undefined}>
        <a href="/coins">Coins</a>
      </li>
      <li aria-current={$page.url.pathname.startsWith('/presentation') ? 'page' : undefined}>
        <a href="/presentation">Präsi</a>
      </li>
      <li aria-current={$page.url.pathname.startsWith('/code_example') ? 'page' : undefined}>
        <a href="/code_example">Code Example</a>
      </li>
      <li aria-current={$page.url.pathname.startsWith('/code_example2') ? 'page' : undefined}>
        <a href="/code_example2">Code example 2</a>
      </li>
    </ul>
  </nav>

  <!-- <div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src=github alt="GitHub" />
		</a>
	</div> -->
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    background-color: #333;
  }

  /* .corner {
		width: 3em;
		height: 3em;
	} */

  /* .corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	} */

  nav {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav li {
    margin: 0 10px;
  }

  nav a {
    color: #fff;
    text-decoration: none;
  }

  nav a:hover {
    text-decoration: underline;
  }
</style>
