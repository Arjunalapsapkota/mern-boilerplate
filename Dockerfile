FROM node:8
# App as our working directory


ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


WORKDIR /app

#lets copy package.json only for now
COPY package*.json ./

#lets make client directory inside the client
RUN mkdir -p ~/client

#lets copy second package.json for react app inside client folder to client in app directory
COPY client/package*.json ./client/

#install all the dependencies
RUN npm install --unsafe-perm

#RUN cd client && npm install
#build 
#RUN npm run build
#copy all the files 
COPY . .
#RUN npm install 
RUN npm run build

#RUN npm rebuild node-sass
#expose the port
EXPOSE  8000


#and finally npm start
CMD ["npm","start"]