FROM node:16-alpine
# # FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31

# # WORKDIR /usr/src/app
# # RUN npm init
# # RUN  curl -fsSL https://deno.land/x/install/install.sh |  DENO_INSTALL=/usr/local sh
# # RUN deno -V
# # ENV PATH $PATH:/.deno/bin
# # ENV APP_HOME /usr/src/app

# # RUN curl -fsSL https://deno.land/x/install/install.sh | sh

# # ENV DENO_INSTALL=~/.deno

# # ENV PATH=$DENO_INSTALL/bin:$PATH

# # RUN curl -fsSL https://deno.land/x/install/install.sh | sh
# # ENV DENO_INSTALL="/root/.deno"
# # ENV PATH="$DENO_INSTALL/bin:$PATH"


# # RUN echo 'export DENO_INSTALL="/root/.deno"' >> ~/.bash_profile \
# #   && echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> ~/.bash_profile

# # RUN deno -V


# Docker buildの場合 
# WORKDIR /app
# # RUN chmod 755 /web/front/app
# COPY /app/package.json  /app
# COPY /app/package-lock.json  /app
# RUN npm install npm@latest
# COPY /app/next.config.js /app
# COPY /app/pages /app/pages
# COPY /app/public /app/public
# COPY /app/styles /app/styles
# COPY /app/store /app/store
# COPY /app/features /app/features

WORKDIR /web/front/app
RUN chmod 755 /web/front/app
COPY /web/front/app/package.json  /app
COPY /web/front/app/package-lock.json  /app
RUN npm install npm@latest
COPY /web/front/app/next.config.js /app
COPY /web/front/app/ ./

# COPY /web/front/app/pages /pages
# COPY /web/front/app/public /public
# COPY /web/front/app/styles /styles
# COPY /web/front/app/store /store
# COPY /web/front/app/features /features


EXPOSE 3000

# RUN npm install -g npm@latest && npm install create-next-app --ts
CMD ["npm", "run", "dev"]


# Slightly modified version of next.js's with-docker Dockerfile
# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# # Install dependencies only when needed
# FROM node:16-alpine AS deps

# ENV NODE_ENV=production

# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat

# WORKDIR /app

# COPY /app/package.json /app
# COPY /app/package-lock.json /app
# COPY /app/tsconfig.json /app/tsconfig.json


# RUN npm install
# RUN	npm install typescript @types/node


# # Rebuild the source code only when needed
# FROM node:16-alpine AS builder

# ENV NODE_ENV=production
# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry.
# # ENV NEXT_TELEMETRY_DISABLED 1

# WORKDIR /app

# COPY /app/next.config.js /app
# COPY /app/package.json /app
# COPY /app/package-lock.json /app
# COPY /app/next.config.js /app
# COPY --from=deps /app/node_modules /app

# COPY /app/next.config.js /app
# COPY /app/pages /app/pages
# COPY /app/public /app/public
# COPY /app/styles /app/styles
# COPY /app/store /app/store
# COPY /app/features /app/features
# COPY /app/tsconfig.json /app/tsconfig.json


# RUN npm install
# RUN	npm install typescript @types/node
# RUN npm run build

# # Production image, copy all the files and run next
# FROM node:16-alpine AS runner
# WORKDIR /app

# ENV NODE_ENV=production
# # Uncomment the following line in case you want to disable telemetry during runtime.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # You only need to copy next.config.js if you are NOT using the default configuration
# # COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public /app/public

# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER nextjs

# CMD ["node", "server.js"]