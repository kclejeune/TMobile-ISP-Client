FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml .
COPY .yarn/ .yarn/
RUN yarn install --immutable --check-cache

COPY . .
RUN yarn build && yarn workspaces focus --all --production

FROM node:lts-alpine AS deploy
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/svelte.config.js .
COPY --from=build /app/package.json .

ENV PORT=3000
CMD [ "node", "./build" ]
