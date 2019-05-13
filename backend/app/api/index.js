const { Router } = require('express');
const SemestreRouter = require('./semestres');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/semestres', SemestreRouter);

module.exports = router;
