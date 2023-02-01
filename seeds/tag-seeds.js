const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Vintage',
  },
  {
    tag_name: 'Signed',
  },
  {
    tag_name: 'Rare',
  },
  {
    tag_name: 'Red',
  },
  {
    tag_name: 'Blue',
  },
  {
    tag_name: 'On Sale',
  },
  {
    tag_name: 'Rugged',
  },
  {
    tag_name: 'Hip',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
