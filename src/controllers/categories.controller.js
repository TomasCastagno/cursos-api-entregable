const CategoryService = require("../services/category.service");

// controlador para crear categoría
const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const result = await CategoryService.create(newCategory);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//controlador para eliminar categoría
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CategoryService.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createCategory,
  deleteCategory,
};
