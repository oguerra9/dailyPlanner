const router = require('express').Router();
const { Category, Planned } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Planned events
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Planned}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Planned Events
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Planned }],
    });
    res.status(200).json(categoryData);
    if (!categoryData) {
      res.status(404).json({ message: 'No category could be find by that id!'})
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category found by this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const plannedsData = await Planned.destroy({
      where: {
        category_id: req.params.id,
      },
    });
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    if (!categoryData) {
      res.status(404).json({ message: 'Category could not be found by that id!'});
    } else {
      res.status(200).json({ message: `Category ${req.params.id} deleted successfully.` })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
