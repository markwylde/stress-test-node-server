require('http').globalAgent.maxSockets = 50;
const axios = require('axios');

function runBatch () {
  const promises = [];
  console.time('1000 requests');
  for (let x = 0; x < 1000; x++) {
    const p = axios('http://0.0.0.0:8000');
    promises.push(p);
  }

  Promise
    .all(promises)
    .then(() => {
      console.timeEnd('1000 requests');
      // runBatch();
    })
    .catch(() => console.log('not ok'));
}

runBatch();
