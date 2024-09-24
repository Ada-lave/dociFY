FROM node as build

WORKDIR /var/www/

COPY . .

RUN npm install --force
RUN export NODE_OPTIONS="--max-old-space-size=8192"
RUN npm run build


FROM nginx:latest

COPY --from=build  /var/www/www /usr/share/nginx/html
COPY docker/nginx/ /etc/nginx/conf.d/
