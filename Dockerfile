# Pulls the nginx web server image to host static files
FROM nginx:alpine

# Copies the Storybook files into the directory for nginx
COPY storybook-static /usr/share/nginx/html

# Copies custom configurations to make nginx listen on port 8083
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Makes container use port 8083
EXPOSE 8083

# Starts nginx and keeps container running
CMD ["nginx", "-g", "daemon off;"]