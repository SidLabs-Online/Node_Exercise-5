const fetch = require('node-fetch');

// fetch('https://api.publicapis.org/entries')
//     .then(res => res.text())
//     .then(body => console.log(body));

fetch('https://api.publicapis.org/entries')
    .then(res => res.json())
    .then(json => console.log(json));

