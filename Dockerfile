# Build stage
FROM node:20-alpine as builder

WORKDIR /sontag_kyle_ui_garden_build_checks

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Build Storybook for production
RUN npm run build-storybook

# Production nginx server
FROM nginx:alpine

WORKDIR /sontag_kyle_ui_garden_build_checks

# Copy custom nginx config for port 8018
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Storybook from builder stage
COPY --from=builder /sontag_kyle_ui_garden_build_checks/storybook-static /usr/share/nginx/html

# Expose port 8018
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]