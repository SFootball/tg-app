# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=20.12.1

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as builder

# Рабочая директория
WORKDIR /app

# Скопировать package.json и yarn.lock для установки зависимостей
COPY package.json yarn.lock ./

# Установить зависимости
RUN yarn install

# Скопировать все файлы приложения
COPY . .

# Сборка проекта
RUN yarn build

# Stage 2: Nginx для раздачи статики
FROM nginx:alpine

# Копировать сгенерированные файлы в Nginx директорию
COPY --from=builder /app/dist /usr/share/nginx/html

# Копировать кастомную конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Экспозировать порт 3000
EXPOSE 3000

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]