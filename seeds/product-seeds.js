const { Product } = require('../models');

const productData = [
  {
    product_name: 'Yabujin FanBoy Shirt',
    price: 19.99,
    stock: 25,
    category_id: 1,
  },
  {
    product_name: 'Silver Skull Ring',
    price: 25.99,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Mickey Mouse Watch',
    price: 15.49,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Kobe Bryant Signed Socks',
    price: 74.99,
    stock: 15,
    category_id: 3,
  },
  {
    product_name: 'True Religion Denim',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;