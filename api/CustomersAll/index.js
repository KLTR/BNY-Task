const customers = require('../data/customers.json');

module.exports = async function (context, req) {
  console.log(customers);

  context.res = {
        headers: {
          'Content-Type': 'application/json'
        },
        // status: 200, /* Defaults to 200 */
        body: customers
    };
    console.log(customers);
}
