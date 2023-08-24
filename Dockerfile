FROM node:20

WORKDIR /app

COPY package.json ./

RUN npm install --save-dev

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
