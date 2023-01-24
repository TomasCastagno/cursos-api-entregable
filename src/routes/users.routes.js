const { Router } = require("express");
const {
  getUserById,
  createUser,
  updateUser,
  getUserWithCourses,
  addCourseUser,
} = require("../controllers/users.controller");

const router = Router();

//obtener un usuario por id
router.get("/users/:id", getUserById);

//obtener a un usuario junto con sus cursos
router.get("/users/:id/courses", getUserWithCourses);

//crear un usuario
router.post("/users", createUser);

// actualizar usuario
router.put("/users/:id", updateUser);

// agregar un curso a un usuario
router.post("/users/addcourse", addCourseUser);

module.exports = router;
