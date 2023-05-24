const router = require('express').Router();
const { Settings } = require('../../models');

// The `/api/settings` endpoint

// get all settings
router.get('/', async (req, res) => {
  console.log(`[GET /settings/]`);
  // find all settings
  try {
    const settingsData = await Settings.findAll();
    res.status(200).json(settingsData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// get one setting by ID
router.get('/:id', async (req, res) => {
  console.log(`[GET /settings/:id]`);
  // find a single setting by its `id`
  try {
    const settingsData = await Settings.findByPk(req.params.id);
    
    if (!settingsData) {
      res.status(404).json({ message: 'Setting could not be found'})
    }
    res.status(200).json(settingsData);
    
  } catch (err) {
    res.status(500).json(err)
  }
});

// // get one setting by name
// router.get('/:setting_name', async (req, res) => {
//     // find a single setting by its `setting_name`
//     try {
//       const settingsData = await Settings.findOne({ where: { setting_name: req.params.setting_name } });
      
//       if (!settingsData) {
//         res.status(404).json({ message: 'Setting could not be found'})
//       }
//       res.status(200).json(settingsData);
      
//     } catch (err) {
//       res.status(500).json(err)
//     }
// });

// create new setting
router.post('/', (req, res) => {
  console.log(`[POST /settings/]`);
  /* req.body should look like this...
    {
      setting_name: STRING,
      setting_value: STRING
    }
  */
    Settings.create(req.body)
        .then((setting) => {
            res.status(200).json(setting);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// update setting
router.put('/:id', (req, res) => {
  console.log(`[PUT /settings/:id]`);
  // update setting data
    Settings.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((setting) => {
            res.status(200).json(setting);
        })
        .catch((err) => {
            // console.log(err);
            res.status(400).json(err);
        });
});

// // update setting
// router.put('/:setting_name', (req, res) => {
//     // update setting data
//     Settings.update(req.body, {
//         where: {
//           setting_name: req.params.setting_name,
//         },
//     })
//         .then((setting) => {
//             res.status(200).json(setting);
//         })
//         .catch((err) => {
//             // console.log(err);
//             res.status(400).json(err);
//         });
// });

router.delete('/:id', async (req, res) => {
  console.log(`[DELETE /settings/:id]`);
  // delete one setting by its `id` value
  try {
    const settingsData = await Settings.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(settingsData);
    if (!settingsData) {
      res.status(404).json({ message: 'Setting could not be found'})
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.delete('/:setting_name', async (req, res) => {
//   // delete one setting by its `id` value
//   try {
//     const settingsData = await Settings.destroy({
//       where: {
//         setting_name: req.params.setting_name,
//       },
//     });
//     res.status(200).json(settingsData);
//     if (!settingsData) {
//       res.status(404).json({ message: 'Setting could not be found'})
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
