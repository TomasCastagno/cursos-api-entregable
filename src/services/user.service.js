const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/usersCourses.models");

class UserService {
  //servicio para obtener usuario por id
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: { exclude: ["password"] },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  //servicio para obtener usuario con sus cursos
  static async getWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: { exclude: ["password"] },

        include: {
          model: UsersCourses,
          attributes: ["courseId"],
          as: "courses",
          include: {
            model: Courses,
            as: "course",
            attributes: ["title"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  //servicio para crear usuario
  static async create(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //servicio para actualizar usuario (en el body solo poner firstName, lastName y password)
  static async update(id, field) {
    try {
      const result = await Users.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  // servicio para agregar un curso a un usuario
  static async addCourse(add) {
    try {
      const result = await UsersCourses.create(add);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
