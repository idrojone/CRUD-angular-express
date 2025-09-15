var router = require('express').Router();

const concierto_controller = require("../../controllers/conciertos.controller")
router.get('/', concierto_controller.getall_conciertos);
router.get('/:id', concierto_controller.getone_concierto);
router.post('/', concierto_controller.create_concierto);
router.delete('/:id', concierto_controller.delete_concierto);
router.put('/:id', concierto_controller.update_concierto);


module.exports = router;