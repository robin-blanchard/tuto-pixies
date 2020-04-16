#!/bin/sh

echo "BACKEND_URL='$BACKEND_URL'" > /usr/share/nginx/html/.env
sed "s/\$PORT/${PORT}/g" < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
nginx -g "daemon off;"