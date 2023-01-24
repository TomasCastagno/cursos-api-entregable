const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Courses = require("./courses.models");

const Videos = db.define(
  "videos",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      field: "course_id",
      // references: {
      //   model: Courses,
      //   key: "id",
      // },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Videos;
