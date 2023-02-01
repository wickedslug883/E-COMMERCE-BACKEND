const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');



router.get('/', (req, res) => {

 
    Category.findAll({
      include: [{ model: Product }]
}).then(reponse=>res.status(200).json(response))
     .catch (err => res.status(400).json(err)) 
  
  }
);

router.get('/:id', (req, res) => {

  try {
    const singleCatData = Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!singleCatData) {
      res.status(404).json({ message: 'No Category was found with that id!' });
      return;
    }
    res.status(200).json(singleCatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Category.update(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  try {
    const singleCatData = Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!singleCatData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(singleCatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;