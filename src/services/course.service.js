const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

// servicio para obtener todos los cursos
class CourseService {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  // servicio para obtener todos los cursos con sus categorias y videos
  static async getWithDetails() {
    try {
      const result = await Courses.findAll({
        include: [
          {
            model: Categories,
            as: "categories",
            attributes: ["name"],
          },
          {
            model: Videos,
            as: "videos",
            attributes: ["title", "url"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  // crear un nuevo curso
  static async create(newCurse) {
    try {
      const result = await Courses.create(newCurse);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //editar un curso (solo editar descripción
  static async update(id, field) {
    try {
      const result = await Courses.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CourseService;
