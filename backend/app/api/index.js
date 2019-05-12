const { Router } = require('express');
const SemestreRouter = require('./semestre');
const StageRouter = require('./stage');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/semestres', SemestreRouter);
router.use('/stages', StageRouter);

module.exports = router;
