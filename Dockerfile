FROM node:12.4.0-alpine

# Set the Current Working Directory inside the container
WORKDIR /usr/src/app

# Copy dependencies package list
COPY package*.json ./

# Install dependencies
RUN npm i -g npm \
    && npm i

# Copy all source code
COPY . .

# Expose application port
EXPOSE 9000

# Run application
CMD ["npm","start"]
