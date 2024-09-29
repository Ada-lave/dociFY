FROM node:alpine as build

WORKDIR /var/www/

COPY . .

RUN npm install --force
RUN export NODE_OPTIONS="--max-old-space-size=8192"
CMD npm run build
