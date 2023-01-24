const { Router } = require("express");
const {
  getAllCourses,
  getCoursesWithDetails,
  createCurse,
  updateCurse,
} = require("../controllers/courses.controller");

const router = Router();

// obtener todos los cursos
router.get("/courses", getAllCourses);

// obtener todos los cursos junto con las categorias y videos
router.get("/courses/details", getCoursesWithDetails);

// crear nuevo curso
router.post("/courses", createCurse);

//editar un curso (description)
router.put("/courses/:id", updateCurse);

module.exports = router;
