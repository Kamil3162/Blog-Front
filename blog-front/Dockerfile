# Step 1: Use a Node base image
FROM node:19 as build

# Step 2: Set working directory
WORKDIR /blog-front

# Step 3: Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy your application code
COPY . ./

# Step 5: Build the React application
RUN npm run build

# Step 6: Use nginx to serve the static files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]