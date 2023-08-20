# Use an official Node.js image as the base image
FROM node:18-alpine3.17

RUN mkdir -p /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Set the working directory inside the container
WORKDIR /usr/src/App

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Specify the command to run when a container is started
CMD [ "npm", "start" ]
