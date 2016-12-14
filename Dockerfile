FROM nginx:latest

ENV NGINX_HTTP_PORT=$PORT
#EXPOSE $PORT
COPY nginx /etc/nginx/conf.d/
COPY build /usr/share/nginx/html/
