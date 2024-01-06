FROM node:latest
LABEL authors="MarcouxDesBois"
WORKDIR /src
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3001