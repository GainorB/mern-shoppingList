## LEARNED

```js
"scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm run dev --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```

1.  **npm run server** will both npm run server and npm run client
2.  --prefix flag prefixes the command that is ran, ex: npm run dev --prefix client is equivalent to cd client && npm run dev.

## NEW NPM MODULES

1.  [concurrently](https://github.com/kimmobrunfeldt/concurrently): Run commands concurrently
