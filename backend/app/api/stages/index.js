const { Router } = require('express');
const { Stage } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  try {
    if (req.query.q) {
      res.status(200).json(Stage.search(req.query.q));
    } else {
      res.status(200).json(Stage.get());
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:stageId', (req, res) => {
  try {
    res.status(200).json(Stage.getById(req.params.stageId));
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
    const ticket = Stage.create(Object.assign({}, { notes: '' }, req.body));
    res.status(201).json(ticket);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

router.put('/:stageId', (req, res) => {
  try {
    res.status(200).json(Stage.update(req.params.stageId, req.body));
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

router.delete('/:stageId', (req, res) => {
  try {
    Stage.delete(req.params.stageId);
    res.status(204).end();
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else {
      res.status(500).json(err);
    }
  }
});

//router.use('/:stageId/tickets', StageRouter);

module.exports = router;
