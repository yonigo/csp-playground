# csp-playground

Small Express server to server different CSP headers.

This server dynamically addes all folders under public/pages/<page-name> to the index file.
Then you can specify csp policy for each page

## usage

clone
npm /yarn install
run npm start from project root

## Adding pages

1. Create a new folder named <page-name> under public/pages
2. Add an index.html file in the new folder
3. Add a csp.json file that describes the csp response header the server will reply with the request

### CSP format:

The csp.json contains an object with the required policies. This will be served directly into the [csp-header](https://www.npmjs.com/package/csp-header) middleware

```javascript
{
    "policies": {
        "script-src": [
            "'nonce-bm9uY2U='"
        ]
    }
}
```


