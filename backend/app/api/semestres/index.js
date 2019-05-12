const { Router } = require('express');
const { Semestre } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  try {
    if (req.query.q) {
      res.status(200).json(Semestre.search(req.query.q));
    } else {
      res.status(200).json(Semestre.get());
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:semestreId', (req, res) => {
  try {
    res.status(200).json(Semestre.getById(req.params.SemestreId));
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else {
      res.status(500).json(err);
    }
  }
});

router.post('/', (req, res) => {
  try {
    const semestre = Semestre.create(Object.assign({}, { notes: '' }, req.body));
    res.status(201).json(semestre);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

router.put('/:semestreId', (req, res) => {
  try {
    res.status(200).json(Semestre.update(req.params.SemestreId, req.body));
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

router.delete('/:semestreId', (req, res) => {
  try {
    Semestre.delete(req.params.SemestreId);
    res.status(204).end();
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else {
      res.status(500).json(err);
    }
  }
});

//router.use('/:semestreId/tickets', SemestreRouter);

module.exports = router;
