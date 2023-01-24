const CourseService = require("../services/course.service");

// controlador para obtener todos los cursos
const getAllCourses = async (req, res) => {
  try {
    const result = await CourseService.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// controlador para obtener todos los cursos
const getCoursesWithDetails = async (req, res) => {
  try {
    const result = await CourseService.getWithDetails();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// controlador para crear nuevo curso
const createCurse = async (req, res) => {
  try {
    const newCurse = req.body;
    const result = await CourseService.create(newCurse);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// controlador para editar un curso
const updateCurse = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await CourseService.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllCourses,
  getCoursesWithDetails,
  createCurse,
  updateCurse,
};
