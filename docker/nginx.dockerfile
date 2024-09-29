FROM nginx:1.27.0-alpine

COPY ./docker/nginx/ /etc/nginx/conf.d/
