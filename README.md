# Production

docker build -t react-app .
docker run -p 3000:3000 react-app

Running this commands will install all dependencies, build and deploy the website. 

The dockerfile includes the correct node and nginx versions needed.
