FROM node:10.15.0

RUN mkdir -p /opt/src/app

WORKDIR  /opt/src/app

COPY package.json /opt/src/app

# install simple http server for serving static content
RUN npm install

COPY . /opt/src/app

EXPOSE 3000

CMD ["npm", "start"]