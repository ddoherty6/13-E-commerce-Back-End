const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    attributes: ['id', 'category_name'],
    // be sure to include its associated Products
    include: [
      {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
  .then(dbAllCategory => res.json(dbAllCategory))
  .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    attributes: ['id', 'category_name'],
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [
      {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
    ]
  })
  .then(dbOneCategory => {
    if (!dbOneCategory) {
      res.status(404).json({ message: "Category not found"});
      return;
    }
    res.json(dbOneCategory);
  })
  .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => { // expects 1 param input category_name
  // create a new category
  Category.create({category_name: req.body.category_name})
  .then(dbCreateCategory => res.json(dbCreateCategory))
  .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbCategoryUpdate => {
    if(!dbCategoryUpdate) {
      res.status(404).json({ message: "Category not found"});
      return;
    }
    res.json(dbCategoryUpdate);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryDelete => {
    if(!dbCategoryDelete) {
      res.status(404).json({ message: "Category not found"});
      return;
    }
    res.json(dbCategoryDelete);
  })
  .catch(err => res.status(500).json(err));
});

module.exports = router;
