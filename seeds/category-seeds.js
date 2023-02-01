const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Pants',
  },
  {
    category_name: 'Socks',
  },
  {
    category_name: 'Watches',
  },
  {
    category_name: 'Rings',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;