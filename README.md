# express firebase auth

## Installation
1. Clone Project
> `git clone https://github.com/tmlsergen/express-firebase-auth.git`
2. Copy .env file
> `cp .env.example .env`
3. Install npm packages
> `npm install --save-dev`
4. Start the server
> `npm run dev`
5. Or you can build with docker
> `docker build -t example-app-name .`
6. Run docker container
> `docker run -dp 127.0.0.1:8000:8000 example-app-name`
7. Check the container is running
```
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS          PORTS                      NAMES
5bd36a3dab0a   node-app   "docker-entrypoint.s…"   14 seconds ago   Up 12 seconds   127.0.0.1:8000->8000/tcp   suspicious_hermann

```

# Environments
you must fill the .env file with your firebase project credentials
```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```