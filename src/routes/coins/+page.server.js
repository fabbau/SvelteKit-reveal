import { error } from '@sveltejs/kit';
import { CMC_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  console.log('🚀 ~ file: +page.server.js:27 ~ load ~ load:');
  const coinList = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=30',
    {
      headers: {
        'X-CMC_PRO_API_KEY': CMC_API_KEY
      }
    }
  );
  console.log('only on Server: coinList');
  //   console.log(coinList);
  //   console.dir(coinList);
  const data = await coinList.json();
  if (data) {
    return data;
  }

  throw error(404, 'Not found');
}
