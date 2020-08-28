# Introduction

Repro for https://github.com/prisma/prisma-client-js/issues/857

- Migrate `blog.sql` in the database
- Run `yarn; yarn prisma generate`
- Run `node index.js` - It will hang, although it does print both data1, data2, so it is not about auto reconnect
- Remove the 2nd query in index.js, lines 12-16
- Run `node index.js` - It will terminate properly
