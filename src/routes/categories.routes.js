const { Router } = require("express");
const {
  createCategory,
  deleteCategory,
} = require("../controllers/categories.controller");

const router = Router();

//crear categoria
router.post("/categories", createCategory);

//borrar categoria
router.delete("/categories/:id", deleteCategory);

module.exports = router;
