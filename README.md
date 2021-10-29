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
export PORT=33201
docker pull kclejeune/tmobile-isp-client:latest
docker run --restart unless-stopped -e PORT -p $PORT:$PORT -it kclejeune/tmobile-isp-client:latest
```

You can view the app on `http://localhost:$PORT`. To run on a different port, set the `PORT` environment variable accordingly.

## Developing

### Prerequisites

Clone the project, install yarn with `npm install -g yarn`, and then install
dependencies with `yarn install`.

### Dev Server

To start the dev server (with live reloading and hot module swapping), run:

```bash
yarn dev -- --host

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

### Building

This app uses the node adapter to enable server side rendering and reverse proxying to avoid CORS issues. Build for production with:

```bash
yarn build
```

> You can preview the built app with `yarn preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

To run in production, run `node ./build`

## Screenshots

### Desktop

![](/screenshots/desktop-overview.png)
![](/screenshots/desktop-devices.png)

### Mobile

![](/screenshots/mobile-overview.png)
![](/screenshots/mobile-devices.png)
