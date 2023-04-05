FROM node:16.13.0-alpine as builder
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:1.17.10-alpine
COPY --from=builder /app/dist/front-stream-consulti /usr/share/nginx/html