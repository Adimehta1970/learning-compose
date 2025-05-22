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
- Start postgres
  - docker run -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres
- Build the image
  - `docker build -t compose-project .`
- Start the image
  - `docker run -p 3000:3000 compose-project`

## Docker Compose installation steps

- Install docker
- Run `docker comopse up`
