const express = require('express');
const bodyParser = require('body-parser');
const { Category } = require('./models');

const app = express();
app.use(bodyParser.json());

// Create a new category
app.post('/categories', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all categories
app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: {
        model: Category,
        as: 'subcategories',
        include: 'subcategories'
      }
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single category by ID
app.get('/categories/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: {
        model: Category,
        as: 'subcategories',
        include: 'subcategories'
      }
    });
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
