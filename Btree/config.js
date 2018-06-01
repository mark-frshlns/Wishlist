const braintree = require('braintree');

const gateway = braintree.connect({
  environment:braintree.Environment.Sandbox,
  merchantId: 'myq9z8hb4r726rkt',
  publicKey:'4pky36j8n3ndbdjv',
  privateKey:'682799de091f8ce14632546da7a34b0d',
});

module.exports = gateway;