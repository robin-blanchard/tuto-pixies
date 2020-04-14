FROM node:alpine as build

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as final 

COPY --from=build /build/* /usr/share/nginx/html/