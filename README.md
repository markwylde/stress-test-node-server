# Stress Test NodeJS HTTP Server

Create a web server by running the `index.js` file:

```bash
node index.js
```

Then run the stress test `stress.js` to bombard the server with some requests:

```bash
node stress.js
```

Alternatively you could use `ab`:

```bash
ab -n 1000 -c 50 -k http://0.0.0.0:8000/
```
