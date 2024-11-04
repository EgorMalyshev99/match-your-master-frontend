FROM node:20.14.0-alpine AS base


FROM base AS builder

ARG APP_DIR

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR $APP_DIR

RUN npm install -g turbo

COPY prod .

RUN turbo prune landing --docker


FROM base AS installer

ARG APP_DIR
ARG PNPM_VERSION

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR $APP_DIR

COPY --from=builder /app/out/json/ .

RUN npm install -g pnpm@$PNPM_VERSION
RUN pnpm install

COPY --from=builder /app/out/full/ .

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

RUN pnpm turbo build --filter=landing...


FROM base AS runner

ARG APP_DIR
ARG DOCKER_UID_GID

WORKDIR $APP_DIR

RUN adduser -S -s /bin/bash -u $DOCKER_UID_GID -D -h /home/appuser appuser
USER $DOCKER_UID_GID:$DOCKER_UID_GID

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=$DOCKER_UID_GID:$DOCKER_UID_GID /app/apps/landing/.next/standalone ./
COPY --from=installer --chown=$DOCKER_UID_GID:$DOCKER_UID_GID /app/apps/landing/.next/static ./apps/landing/.next/static
COPY --from=installer --chown=$DOCKER_UID_GID:$DOCKER_UID_GID /app/apps/landing/public ./apps/landing/public

CMD node apps/landing/server.js
