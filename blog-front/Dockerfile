# Step 1: Use a Node base image
FROM node:19 as build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json files and install dependencies
COPY package*.json ./
#RUN npm install dotenv
RUN npm install

# Step 4: Copy your application code
COPY . ./

# Step 5: Build the React application
RUN npm run build

# Step 6: Use nginx to serve the static files
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/build /var/www/kamilholub.pl/html

RUN chmod -R 755 /var/www/kamilholub.pl/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
