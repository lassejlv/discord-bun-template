FROM oven/bun

WORKDIR /app

COPY src /app/src

# Remove .env if you are using a service like Railway.app
COPY bun.lockb package.json tsconfig.json .env /app/

RUN apt-get update && apt-get install unzip

# Ensure we're 100% on the newest version
RUN bun upgrade

RUN bun i

CMD bun run start