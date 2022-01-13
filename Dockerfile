FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && npm ci --prod

FROM node:lts-alpine AS deploy
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/svelte.config.js .
COPY --from=build /app/package.json ./

ENV PORT=3000
CMD [ "node", "./build" ]
