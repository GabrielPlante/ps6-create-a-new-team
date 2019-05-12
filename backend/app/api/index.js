const { Router } = require('express');
const SemestreRouter = require('./semestres');
const StageRouter = require('./stages');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/semestres', SemestreRouter);
router.use('/stages', StageRouter);

module.exports = router;
