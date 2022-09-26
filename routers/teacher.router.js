const router = require('express').Router();

//     /teacher/
router.route('/').post().get();
router.route('/:id').patch().delete();


module.exports = router; 