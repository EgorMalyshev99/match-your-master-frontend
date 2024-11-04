FROM node:20.14.0-alpine

ARG APP_DIR
ARG PNPM_VERSION
ARG DOCKER_UID_GID

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR $APP_DIR

RUN npm install -g pnpm@$PNPM_VERSION

RUN adduser -S -s /bin/bash -u $DOCKER_UID_GID -D -h /home/appuser appuser

USER $DOCKER_UID_GID:$DOCKER_UID_GID
WORKDIR $APP_DIR
