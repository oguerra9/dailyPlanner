const router = require('express').Router();
const Date = require('../../utils/dateMethods');
const { Planned, Category, PlanType } = require('../../models');
const { Op } = require('sequelize');

// The `/api/planneds` endpoint


// // GET all books
// router.get('/', (req, res) => {
//   // Get all books from the book table
//   Planned.findAll().then((plannedData) => {
//     res.json(plannedData);
//   });
// });

// get all planned events
router.get('/', async (req, res) => {
  // find all planned events
  // be sure to include its associated Category and PlanType data
  try {
    const plannedData = await Planned.findAll({
      include: [{ model: Category }, { model: PlanType }],
    });
    res.status(200).json(plannedData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// get one planned event
router.get('/:id', async (req, res) => {
  // find a single planned event by its `id`
  // be sure to include its associated Category and PlanType data
  try {
    const plannedData = await Planned.findByPk(req.params.id, {
      include: [{ model: Category }, { model: PlanType }]
    });
    
    if (!plannedData) {
      res.status(404).json({ message: 'Planned Event could not be found'})
    }
    res.status(200).json(plannedData);
    
  } catch (err) {
    res.status(500).json(err)
  }
});

// router.get('/range', async (req, res) => {
//   try {
//     let rangeEvents = [];
//     rangeEvents = await Planned.findAll({
//       where: {
//         date: {
//           [Op.between]: [new Date(req.query.rangeStart), new Date(req.query.rangeEnd)],
//          },
//       },
//       include: [{ model: Category }, { model: PlanType }]
//     });

//     res.status(200).json(rangeEvents);
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

router.get('/day/:timestamp', async (req, res) => {
  try {
    let timeDate = new Date(parseInt(req.params.timestamp));
    console.log(`timeDate = ${timeDate}`);
    let dayStart = timeDate.getDayStart();
    console.log(`day start = ${dayStart}`);
    let dayEnd = timeDate.getDayEnd();
    console.log(`day end = ${dayEnd}`);
    let rangeEvents = [];
    
    rangeEvents = await Planned.findAll({
      where: {
        planned_date: {
          [Op.between]: [dayStart, dayEnd],
         },
      },
      include: [{ model: Category }, { model: PlanType }]
    });

    console.log(`range events searched`);

    res.status(200).json(rangeEvents);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/week/:timestamp', async (req, res) => {
  try {
    let timeDate = new Date(timestamp);
    let weekStart = new Date(timeDate.getWeekStart());
    let weekEnd = new Date(timeDate.getWeekEnd());
    let rangeEvents = [];
    rangeEvents = await Planned.findAll({
      where: {
        date: {
          [Op.between]: [weekStart, weekEnd],
         },
      },
      include: [{ model: Category }, { model: PlanType }]
    });

    res.status(200).json(rangeEvents);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/month/:timestamp', async (req, res) => {
  try {
    let timeDate = new Date(timestamp);
    let monthStart = new Date(timeDate.getMonthStart());
    let monthEnd = new Date(timeDate.getMonthEnd());
    let rangeEvents = [];
    rangeEvents = await Planned.findAll({
      where: {
        date: {
          [Op.between]: [monthStart, monthEnd],
         },
      },
      include: [{ model: Category }, { model: PlanType }]
    });

    res.status(200).json(rangeEvents);
  } catch (err) {
    res.status(500).json(err)
  }
});

// create new planned event
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      planned_date: DATE,
      planned_time: TIME,
      planned_title: STRING,
      planned_am: BOOLEAN,
      planned_description: STRING,
      category_id: INTEGER,
      planType_id: INTEGER,
      planned_active: BOOLEAN
    }
  */
  Planned.create(req.body)
    .then((planned) => {
      res.status(200).json(planned);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update planned event
router.put('/:id', (req, res) => {
  // update planned event data
  Planned.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((planned) => {
        res.status(200).json(planned);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete one planned event by its `id` value
  try {
    const plannedData = await Planned.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(plannedData);
    if (!plannedData) {
      res.status(404).json({ message: 'Planned event could not be found'})
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
