FROM node:20-alpine AS builder

WORKDIR /taylor_trent_final_site

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.27-alpine

WORKDIR /taylor_trent_final_site

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /taylor_trent_final_site/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]