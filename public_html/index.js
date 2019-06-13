const express = require('express');
const app = express();
app.listen(3002, () => console.log('listening for adhi'));
app.use(express.static('index.html'));