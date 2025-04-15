# use official js node
FROM node:18

# Set working directory
WORKDIR /app

# copy package.json and install dependencies
COPY  package*.json ./
RUN npm install

# copy app files
COPY . .

#expose app port
EXPOSE 3300

#start up
CMD [ "npm","start" ]
