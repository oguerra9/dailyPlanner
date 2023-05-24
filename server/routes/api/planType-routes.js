const router = require('express').Router();
const { PlanType, Planned, Category } = require('../../models');

// The `/api/planTypes` endpoint

router.get('/', async (req, res) => {
  console.log(`[GET /planTypes/]`);
  // find all planTypes
  // be sure to include its associated Planned events
  try {
    const planTypeData = await PlanType.findAll({
      include: [{ model: Planned}],
    });
    res.status(200).json(planTypeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  console.log(`[GET /planTypes/:id]`);
  // find one planType by its `id` value
  // be sure to include its associated Planned Events
  try {
    const planTypeData = await PlanType.findByPk(req.params.id, {
      include: [{ model: Planned }],
    });
    res.status(200).json(planTypeData);
    if (!planTypeData) {
      res.status(404).json({ message: 'No planType could be find by that id!'})
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/planned/:id', async (req, res) => {
  console.log(`[GET /planTypes/planned/:id]`);
  // find one planType by its `id` value
  // be sure to include its associated Planned Events
  try {
    const plannedList = await Planned.findAll({
      where: {
        planType_id: req.params.id,
      },
      include: [{ model: Category }],
    });
    
    res.status(200).json(plannedList);

    if (!plannedList) {
      res.status(404).json({ message: 'No planned events could be found with that planType!'})
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  console.log(`[POST /planTypes/]`);
  // create a new planType
  try {
    const planTypeData = await PlanType.create(req.body);
    res.status(200).json(planTypeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  console.log(`[PUT /planTypes/:id]`);
  // update a planType by its `id` value
  try {
    const planTypeData = await PlanType.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!planTypeData[0]) {
      res.status(404).json({ message: 'No planType found by this id!' });
      return;
    }
    res.status(200).json(planTypeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  console.log(`[DELETE /planTypes/:id]`);
  // delete a planType by its `id` value
  try {
    const plannedsData = await Planned.destroy({
      where: {
        planType_id: req.params.id,
      },
    });
    const planTypeData = await PlanType.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    if (!planTypeData) {
      res.status(404).json({ message: 'PlanType could not be found by that id!'});
    } else {
      res.status(200).json({ message: `PlanType ${req.params.id} deleted successfully.` })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;