const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { getState, statesData, getStates, stateCapital, stateNickname, statePop, stateAdmission } = require('../controllers/statesController');
const statesController = require('../controllers/statesController');
const funFactController = require('../controllers/funFactController');
const { randomFunFact, postStateFunFact, patchStateFunFact, deleteStateFunFact } = require('../controllers/funFactController');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.route('/states').get(statesController.getStates);

router.route('/states/:code').get(statesController.getState);

router.route('/states/:code/funfact')
    .get(funFactController.randomFunFact)
    .post(funFactController.postStateFunFact)
    .patch(funFactController.patchStateFunFact)
    .delete(funFactController.deleteStateFunFact);

router.route('/states/:code/capital').get(statesController.stateCapital);

router.route('/states/:code/nickname').get(statesController.stateNickname);

router.route('/states/:code/population').get(statesController.statePop);

router.route('/states/:code/admission').get(statesController.stateAdmission);

router.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
});


module.exports = router;