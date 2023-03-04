<script>
  // import { getCoins } from '../../api';

  import ListItem from './ListItem.svelte';
  import RiMoneyDollarCircleLine from '$lib/icons/RiMoneyDollarCircleLine.svelte';

  /**
	 * @type {any}
	 */
  export let data;
  /**
     * @type {any}
     */
  let favouriteCoins = []

	$: console.log("coisn page data");
	$: console.log(data);
	$: console.log("favouriteCoins");
	$: console.log(favouriteCoins);

  /**
     * @param {any} coinId
     */
  function addToFavourite(coinId) {
    if (!favouriteCoins.includes(coinId)) {
      favouriteCoins = [...favouriteCoins, coinId]
    } 
  }
  /**
     * @param {any} coinId
     */
  function removeFromFavourite(coinId) {
    if (favouriteCoins.includes(coinId)) {
      favouriteCoins = favouriteCoins.filter((/** @type {any} */ id) => id !== coinId)
    } 
  }

  // /**
	//  * @type {any[]}
	//  */
  // let coins = [];

  // async function fetchCoins() {
  //   coins = await getCoins();
  // }

  // fetchCoins();
</script>

<h1>Coins</h1>

<div class="container">
  <div class="column">
    <p>All coins</p>
    
      {#each data.data as coin}
        <ListItem>
          <input />
          <svelte:fragment slot="button">
              <button class="addToFavs" on:click="{() => addToFavourite(coin.id)}">{@html '&#10084;'}</button>
          </svelte:fragment>
          <span slot="coinName">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} />
            {coin.name} - <RiMoneyDollarCircleLine /> {coin.quote.USD.price.toFixed(2)}
          </span>
    
          <span slot="volumen">
            {+coin.quote.USD.volume_24h.toFixed(0)}
          </span>

        </ListItem>
      {/each}
    
  </div>



  <div class="column">
    <p>Favourite coins</p>
    
      <!-- {#each favouriteCoins as coin}
        <ListItem>
          <span slot="coinName">
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} />
            {coin.name} - <RiMoneyDollarCircleLine /> {coin.quote.USD.price}
          </span>
          <span slot="volumen">
            {+coin.quote.USD.volume_24h.toFixed(0)}
          </span>
        </ListItem>
      {/each} -->

      {#each data.data as coin}
        {#if favouriteCoins.includes(coin.id)}
          <ListItem>
            <svelte:fragment slot="button">
                <button class="addToFavs" on:click="{() => removeFromFavourite(coin.id)}">x</button>
            </svelte:fragment>
            <span slot="coinName">
              
              <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} />
              {coin.name} - <RiMoneyDollarCircleLine /> {coin.quote.USD.price.toFixed(2)}
            </span>
      
            <span slot="volumen">
              {+coin.quote.USD.volume_24h.toFixed(0)}
            </span>
          </ListItem>
        {/if}
      {/each}
    
  </div>
</div>


<style>
  .container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .column {
    flex-basis: 100%;
  }
}
  ul {
    margin-top: -10px;
  }
  img {
    width: 20px;
    height: 20px;
  }
  button {
		float: right;
		height: 1em;
		box-sizing: border-box;
		padding: 0 0.5em;
		line-height: 1;
		background-color: transparent;
		border: none;
		color: rgb(170,30,30);
		opacity: 0.4;
		transition: opacity 0.2s;
	}

	/* label:hover button { */
	button:hover {
		opacity: 1;
	}
</style>