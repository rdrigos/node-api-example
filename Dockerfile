# Build stage: compiles the application, installs dependencies, and prepares the final directory
FROM node:22.15.0-alpine3.21 AS build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build
RUN yarn install --production && yarn cache clean

# Final stage: optimized image with only what's necessary to run the application
FROM node:22.15.0-alpine3.21

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/.env ./.env
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3333

CMD ["yarn", "run", "start"]
