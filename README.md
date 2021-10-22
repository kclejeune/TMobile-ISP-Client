# T-Mobile ISP Client

T-Mobile's trashcan web client is...garbage, so I'm building my own with SvelteKit. Feel free to use it or contribute!

Currently implemented:

- overview page w/ live updating (refreshes every 5s)
- list of device information

## Running the app

### Docker

The easiest way to setup and run the app with minimal development knowledge is to use [Docker](https://www.docker.com/get-started).
Follow the installation instructions from the website, and then run:

```bash
docker pull kclejeune/tmobile-isp-client:latest && docker run --restart unless-stopped -p 3000:3000 -it kclejeune/tmobile-isp-client:latest
```

You can view the app on `http://localhost:3000`. To run on a different port, set the `PORT` environment variable
and pass it to the container with the following command:

```bash
export PORT=43210
docker pull kclejeune/tmobile-isp-client:latest && docker run -e PORT -p $PORT:$PORT -it kclejeune/tmobile-isp-client:latest
```

substituting `PORT=43210` for the actual port of your choice.

## Developing

Clone the project, install dependencies with `npm install` (or `pnpm install` or `yarn`), and then start a development server with:

```bash
npm run dev -- --host

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

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
