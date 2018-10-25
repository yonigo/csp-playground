const crypto = require('crypto');

// let shasum = crypto.createHash('sha256');
// let filename = path.join(__dirname, 'public','js', 'hash.js');
// let content = fs.readFileSync(filename).toString();
// shasum.update(content);
// let fileHash = "'sha256-" + shasum.digest('base64') + "'";
// console.log(fileHash + '  ' + filename);

//Trying cryptoJS
// const Base64 = require('crypto-js/enc-base64');
// const algorithm = require('crypto-js/sha256');
// const hash = Base64.stringify(algorithm(content));
// fileHash = `sha256-${hash}`;
// console.log(fileHash + '  ' + filename);