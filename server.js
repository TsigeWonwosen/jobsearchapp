const Axios = require('axios');
let data = [];
const result = Axios(
  'https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json',
).then((res) => console.log(res.data));

// console.log(result);
