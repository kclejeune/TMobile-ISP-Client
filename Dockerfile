FROM node:lts-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
RUN npm ci --production --no-audit

FROM node:lts-alpine AS deploy
WORKDIR /app
COPY --from=build /app .

ENV PORT=3000
EXPOSE $PORT
CMD [ "node", "./build" ]