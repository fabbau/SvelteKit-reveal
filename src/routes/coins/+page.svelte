<script>
  // import { getCoins } from '../../api';

  import ListItem from './ListItem.svelte';
  import RiMoneyDollarCircleLine from '$lib/icons/RiMoneyDollarCircleLine.svelte';

  /**
	 * @type {any}
	 */
  export let data;
	$: console.log("coisn page data");
	$: console.log(data);

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

<ul>
  {#each data.data as coin}
    <ListItem>
      <span slot="coinName">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} />
        {coin.name} - <RiMoneyDollarCircleLine /> {coin.quote.USD.price}
      </span>

      <span slot="volumen">
        {+coin.quote.USD.volume_24h.toFixed(0)}
      </span>
    </ListItem>
  {/each}
</ul>

<style>
  ul {
    margin-top: -10px;
  }
  img {
    width: 20px;
    height: 20px;
  }
</style>