FROM node:16

WORKDIR /app

RUN npm install -g @medusajs/medusa-cli

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD [ "npm", "start" ]
