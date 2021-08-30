# T-Mobile ISP Client

T-Mobile's trashcan web client is...garbage, so I'm building my own with SvelteKit. Feel free to use it or contribute!

Currently implemented:

- overview page
- list of device information

## Developing

Clone the project, install dependencies with `npm install` (or `pnpm install` or `yarn`), and then start a development server with:

```bash
npm run dev -- --host

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

This app uses the node adapter to enable server side rendering and reverse proxying to avoid CORS issues. Build for production with:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

To run in production, run `node ./build`

## Screenshots

### Desktop

![](/screenshots/desktop-overview.png)
![](/screenshots/desktop-devices.png)

### Mobile

![](/screenshots/mobile-overview.png)
![](/screenshots/mobile-devices.png)
