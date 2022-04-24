const Router = require('express');
const tzuzulController = require('../controllers/tzuzulController');


const router = Router();


router.get('/', tzuzulController.getTzuzul);
router.post('/', tzuzulController.postTzuzul);
router.put('/:id', tzuzulController.putTzuzul);
router.delete('/:id', tzuzulController.deleteTzuzul);



module.exports = router;

