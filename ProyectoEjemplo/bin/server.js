const { port } = require('../config/index');
const express = require('express');
require('colors');

const app = require('../index');
// const app = express();


console.log('')
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.bgBrightYellow);
    console.log(`Server is running on http://localhost:${port}/tzuzul`.bgBlue.white);
    console.log(`Server is running on http://localhost:${port}/tzuzul`.bgRed.white);
})
// bgBlue.white



