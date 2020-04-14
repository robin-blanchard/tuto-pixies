FROM node:alpine as build

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine as final 

COPY --from=build /build/* /usr/share/nginx/html/

COPY boot.sh /
RUN chmod +x /boot.sh && dos2unix /boot.sh

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf.template
CMD ["/boot.sh"]