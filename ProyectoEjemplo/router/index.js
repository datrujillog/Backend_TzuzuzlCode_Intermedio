const Router = require('express');
const tzuzuzlRouter = require('./zuzulRoute');


const router = Router();

router.use('/tzuzul', tzuzuzlRouter);


module.exports = router;