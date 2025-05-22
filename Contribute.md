## Manual installation

- Install nodejs locally
- git clone the repo
- Install the dependencies locally
- run a postgres database locally
  - docker run -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres
  - Or get one from neon.tech
- change the .env file and update your DB cred
- npx prisma migrate
- npx prisma migrate
- npm run build
- npmr run start

## Docker Installation

- Install docker
- Create a network for both your services (database and express server)
  - `docker network create network-compose`
- Start postgres
  - `docker run -e POSTGRES_PASSWORD=password -d -p 5432:5432 --name postgres-compose postgres`
- Build the image
  - `docker build --network host -t node-compose .`
- Start the image
  - `docker run --network network-compose -e DATABASE_URL=postgresql://postgres:password@postgres-compose:5432/postgres -p 3000:3000 node-compose`

## Docker Compose installation steps

- Install docker
- Run `docker comopse up`
