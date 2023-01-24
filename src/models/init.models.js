const Categories = require("./categories.models");
const Courses = require("./courses.models");
const Users = require("./users.models");
const UsersCourses = require("./usersCourses.models");
const Videos = require("./videos.models");

const initModels = () => {
  UsersCourses.belongsTo(Users, { as: "user", foreingKey: "user_id" });
  Users.hasMany(UsersCourses, { as: "courses", foreingKey: "user_id" });

  UsersCourses.belongsTo(Courses, { as: "course", foreingKey: "course_id" });
  Courses.hasMany(UsersCourses, { as: "users", foreingKey: "course_id" });

  Videos.belongsTo(Courses, { as: "course", foreingKey: "course_id" });
  Courses.hasMany(Videos, { as: "videos", foreingKey: "course_id" });

  Categories.belongsTo(Courses, { as: "course", foreingKey: "course_id" });
  Courses.hasMany(Categories, { as: "categories", foreingKey: "course_id" });
};

module.exports = initModels;
