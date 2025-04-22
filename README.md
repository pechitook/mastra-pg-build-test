This is a reproduction of a bug where building a mastra project with a custom src directory fails when using a pg storage

```
> mastra-build-test@1.0.0 build
> mastra build -d ./src

entryFile src/index.ts
node:internal/url:818
      href = bindingUrl.parse(input, base, true);
                        ^

TypeError: Invalid URL
    at new URL (node:internal/url:818:25)
    at parse (/Users/p4bloch/arenero/mastra-build-test/node_modules/pg-connection-string/index.js:29:14)
    at new ConnectionParameters (/Users/p4bloch/arenero/mastra-build-test/node_modules/pg/lib/connection-parameters.js:56:42)
    at new Client (/Users/p4bloch/arenero/mastra-build-test/node_modules/pg/lib/client.js:18:33)
    at BoundPool.newClient (/Users/p4bloch/arenero/mastra-build-test/node_modules/pg-pool/index.js:222:20)
    at BoundPool.connect (/Users/p4bloch/arenero/mastra-build-test/node_modules/pg-pool/index.js:216:10)
    at PgVector.listIndexes (file:///Users/p4bloch/arenero/mastra-build-test/node_modules/@mastra/pg/dist/index.js:633:36)
    at file:///Users/p4bloch/arenero/mastra-build-test/node_modules/@mastra/pg/dist/index.js:320:42
    at new PgVector (file:///Users/p4bloch/arenero/mastra-build-test/node_modules/@mastra/pg/dist/index.js:331:7)
    at file:///Users/p4bloch/arenero/mastra-build-test/.mastra/deployer.mjs:123:11 {
  code: 'ERR_INVALID_URL',
  input: 'postgresql://undefined:undefined@undefined:undefined',
  base: 'postgres://base'
}

Node.js v22.14.0
```

## Instructions

1. Clone this
1. `npm install`
1. `npm run build`
