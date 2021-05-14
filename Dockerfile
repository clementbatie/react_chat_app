FROM node
<<<<<<< HEAD

# set working directory
RUN mkdir /usr/src/app
#copy all files from current directory to docker
=======
RUN mkdir /usr/src/app
>>>>>>> 23a5b20f94be715f726e7aba3beee2a6f133be10
COPY . /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
<<<<<<< HEAD

# install and cache app dependencies
RUN yarn

#start app
CMD ["npm", "start"]
=======
RUN yarn
CMD ["npm", "start"]
>>>>>>> 23a5b20f94be715f726e7aba3beee2a6f133be10
