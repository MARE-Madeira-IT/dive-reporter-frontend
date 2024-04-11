# Development

Recommended to use docker for development. The following commands allow for the development of the application without the need to install any dependencies.

```sh
docker build -t dive-reporter-frontend .
docker run -e WATCHPACK_POLLING=true -v ${pwd}\src:/app/src:ro  -d -p 3000:3000 --name dive-reporter-frontend dive-reporter-frontend 
```

In case docker is not used, the following are needed:

Node v20.11.0
Npm v10.2.4

Then: 


```sh
npm install
npm run dev
```



# Production

For building and testing the production build you can run: 

```sh
npm run build
npm run preview
```

To deploy you just need to run:

```sh
npm run build
```

And then the /dist folder will have the build which you can upload (e.g netlify)
