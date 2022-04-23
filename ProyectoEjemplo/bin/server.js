const { port } = require('../config/index');
const express = require('express');
require('colors');

const app = require('../index');
// const app = express();


console.log('')
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.bgBlue.white);
    console.log(`Server is running on http://localhost:${port}/app`.bgBrightYellow);
})
// bgBlue.white



