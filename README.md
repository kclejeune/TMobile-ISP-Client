# T-Mobile ISP Client

[![CI](https://github.com/kclejeune/TMobile-ISP-Client/actions/workflows/ci.yml/badge.svg)](https://github.com/kclejeune/TMobile-ISP-Client/actions/workflows/ci.yml)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/kclejeune/TMobile-ISP-Client/master.svg)](https://results.pre-commit.ci/latest/github/kclejeune/TMobile-ISP-Client/master)

T-Mobile's trashcan web client is...garbage, so I'm building my own with SvelteKit. Feel free to use it or contribute!

Currently implemented:

- overview page w/ live updating (refreshes every 5s)
- list of device information

## Running the app

### Docker

The easiest way to setup and run the app with minimal development knowledge is to use [Docker](https://www.docker.com/get-started).
Follow the installation instructions from the website, and then run:

```bash
docker-compose up
```

You can view the app on `http://localhost:33201`, which is set
according to a default value for `PORT=33201` since
port 3000 tends to conflict with too many other things.

To run on a different port, set the `PORT` environment variable or set it in `.env`.
By default, this will pull the tagged `latest` image from Docker Hub. To override
this, set the `TAG` environment variable or modify it in `.env`.

## Developing

### Prerequisites

Clone the project, then install dependencies with `npm install`.

### Dev Server

To start the dev server (with live reloading and hot module swapping), run:

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

To build the docker image, run

```bash
docker-compose build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

To run in production, run `node ./build`, or `docker-compose up` as referenced
previously.

## Screenshots

### Desktop

![](/screenshots/desktop-overview.png)
![](/screenshots/desktop-devices.png)

### Mobile

![](/screenshots/mobile-overview.png)
![](/screenshots/mobile-devices.png)
