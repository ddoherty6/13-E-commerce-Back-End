const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name']
      }
    ]
  })
  .then(dbAllTags => res.json(dbAllTags))
  .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    atributes: ['id', 'tag_name'],
    where: {
      id: req.params.id
    },
    // be sure to include its associated Product data
    include: {
      model: Product,
      atributes: ['id', 'product_name']
    }
  })
  .then(dbOneTag => {
    if (!dbOneTag) {
      res.status(404).json({ message: "Tag not found"} );
      return;
    }
    res.json(dbOneTag);
  })
  .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => { // expects one param tag_name
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbAddTag => res.json(dbAddTag))
  .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbUpdateTag => {
    if (!dbUpdateTag) {
      res.status(404).json({ message: "Tag not found" });
      return;
    }
    res.json(dbUpdateTag);
  })
  .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbDeleteTag => {
    if(!dbDeleteTag) {
      res.status(404).json({ message: "Tag not found"} );
      return;
    }
    res.json(dbDeleteTag);
  })
  .catch(err => res.status(500).json(err));
});

module.exports = router;
