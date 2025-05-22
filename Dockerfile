FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres"
RUN npx prisma migrate dev --name init
RUN npx prisma generate
RUN npm run build

CMD ["npm", "start"]