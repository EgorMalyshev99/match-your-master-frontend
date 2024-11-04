FROM node:20.14.0-alpine

ARG APP_DIR
ARG PNPM_VERSION

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR $APP_DIR

COPY . .

RUN npm install -g pnpm@$PNPM_VERSION
RUN pnpm install

CMD pnpm dev --filter=landing