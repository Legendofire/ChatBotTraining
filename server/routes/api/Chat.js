let router = require('express').Router();

const ChatController = require('../../controllers/Chat');

router.post('/sendMessage', ChatController.sendMessage);
router.get('/getIntents', ChatController.getIntents);
router.get('/getEntities', ChatController.getEntities);
router.post('/updateIntents', ChatController.updateIntents);
router.post('/updateEntities', ChatController.updateEntities);
router.post('/getLogs', ChatController.getLogs);

router.get('/getLogs', ChatController.getLogs);

module.exports = router;
