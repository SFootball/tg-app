FROM node:20.9.0-alpine3.18 as build
WORKDIR /usr/app
COPY . /usr/app/
RUN yarn install

ARG VITE_API_URL=https://apiservice.containers.cloud.ru
ENV NODE_ENV=production
ENV VITE_API_URL=${VITE_API_URL}

RUN yarn build

FROM nginxinc/nginx-unprivileged
EXPOSE 8080
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html

# FROM node:20.12.1-alpine as builder


# WORKDIR /usr/app

# COPY ./package.json ./yarn.lock ./
# RUN yarn install

# COPY ./ .

# CMD ["yarn", "dev"]

# FROM node:20.12.1-alpine as builder

# WORKDIR /usr/app

# COPY ./package.json ./yarn.lock ./
# RUN yarn install

# COPY ./ .


# ARG NODE_ENV=production
# ENV NODE_ENV ${NODE_ENV}

# RUN yarn build

# FROM nginxinc/nginx-unprivileged 

# COPY --from=builder /usr/app/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /usr/app/dist /usr/share/nginx/html

# EXPOSE 3000

# CMD ["nginx", "-g", "daemon off;"]