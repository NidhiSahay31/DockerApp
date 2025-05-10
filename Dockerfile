FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 90
CMD ["npm", "start"]