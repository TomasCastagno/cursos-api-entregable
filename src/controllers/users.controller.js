const UserService = require("../services/user.service");

//controlador para obtener usuario por id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//controlador para obtener usuario junto con sus cursos
const getUserWithCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.getWithCourses(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//controlador para crear usuario
const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserService.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//controlador para actualizar usuario
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UserService.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//controlador para agregar un curso a  un usuario
const addCourseUser = async (req, res) => {
  try {
    const add = req.body;
    const result = await UserService.addCourse(add);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser,
  addCourseUser,
};
