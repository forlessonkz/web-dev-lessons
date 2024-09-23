// client.js
const axios = require('axios');

axios.get('http://localhost:3000/sum')
  .then(response => {
    console.log('Sum of array:', response.data.sum);
  })
  .catch(error => {
    console.error('Error fetching sum:', error.message);
  });
