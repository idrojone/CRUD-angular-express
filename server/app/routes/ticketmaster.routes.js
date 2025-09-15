var router = require('express').Router();

router.use('/api/conciertos', require('./api'));

module.exports = router;