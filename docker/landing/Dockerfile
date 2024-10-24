FROM node:20-alpine AS base

# Install pnpm globally
RUN apk update && apk add --no-cache libc6-compat curl \
    && curl -fsSL https://get.pnpm.io/v6.js | node - add --global pnpm

# Set PNPM_HOME and add it to PATH
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

FROM base AS builder
# Set working directory
WORKDIR /app
# Install turbo globally
RUN pnpm install -g turbo@2.2.1
COPY ../.. .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
# Assuming "landing" is the name entered in the project's package.json: { name: "landing" }
RUN turbo prune landing --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm build --filter=landing

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/landing/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/landing/.next/static ./apps/landing/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/landing/public ./apps/landing/public

ENV HOSTNAME "0.0.0.0"
ENV PORT 3001
EXPOSE 3001

CMD ["node", "apps/landing/server.js"]
