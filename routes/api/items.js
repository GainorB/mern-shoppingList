const express = require('express');

const router = express.Router();

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All items
// @access Public

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.status(200).json(items));
});

// @route POST api/items
// @desc Create a item
// @access Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then(item => res.status(202).json(item));
});

// @route DELETE api/items/:id
// @desc Delete a item
// @access Public

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.status(200).json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
