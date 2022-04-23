const Router = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.json('aprendiendo express con routas');
})

module.exports = router;

