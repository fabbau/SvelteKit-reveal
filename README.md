## Developing

> If you want to use the coin section in this app, then you have to do the following:

- Rename the `.env.example` file to `.env`.

- Then add your CMC api key to the file: `CMC_API_KEY='YOUR-KEY'`


Once you are done, install the dependencies with `npm install` (or `pnpm install` or `yarn`), then start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Icons
Icons an be retrieved from [Icones JS](https://icones.js.org/)