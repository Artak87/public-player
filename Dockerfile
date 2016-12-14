FROM node:6.2.0-slim

WORKDIR /usr/src/app

# ENV NODE_ENV=test

# Update aptitude with new repo
# RUN apt-get update

# Install software
# RUN apt-get install -y git

COPY . .

RUN npm install -q

RUN npm run install-typings && npm test

RUN npm run build

CMD ["npm", "start"]
