# Use a Node.js base image. This is the foundation of your container.
FROM node:18-alpine

# Set the working directory inside the container. All subsequent commands will run from here.
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies.
# We copy them first to leverage Docker's layer caching.
COPY package*.json ./

# Install the bot's dependencies.
RUN npm install

# Copy the rest of your application code into the container.
COPY . .

# Expose any ports your application listens on, if applicable.
# Your bot likely doesn't need this, but it's good practice for web apps.
# EXPOSE 3000

# Specify the command to run when the container starts.
CMD ["node", "index.js"]
