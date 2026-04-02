# Web Directory 
## Express app on top of <a href='https://hub.docker.com/_/node'>Nodejs version 22 and above</a>

### The steps below should be written in the form of a Dockerfile. Refer to the slides for more help.

1. The files should be copied to the work directory `WORKDIR`, which is /app
2. In order to bring in the dependencies, `npm install` is needed
3. After installing the dependencies, it is time to copy all content into the current directory in the Docker Image
4. Then we need to expose the port 3000
5. Finally, run the application `node index.js`
