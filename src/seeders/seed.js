const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const initModels = require("../models/init.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/usersCourses.models");
const Videos = require("../models/videos.models");
const db = require("../utils/database");

initModels();

const users = [
  {
    firstName: "Tomas",
    lastName: "Castagno",
    password: "1234",
    email: "tomas@gmail.com",
  },
  {
    firstName: "Pablo",
    lastName: "Galetto",
    password: "1234",
    email: "pablo@gmail.com",
  },
  {
    firstName: "Francisca",
    lastName: "Reba",
    password: "1234",
    email: "francisca@gmail.com",
  },
];

// Que curso está haciendo cada usuario
const usersCourses = [
  { userId: 1, courseId: 2 }, //Tomás está haciendo el curso de programación
  { userId: 1, courseId: 1 }, // Tomás está haciendo el curso de Inglés
  { userId: 2, courseId: 3 }, // Pablo está haciendo el curso de Meditación
  { userId: 3, courseId: 1 }, // Francisca está haciendo el curso de inglés
];

const courses = [
  {
    title: "Curso de Ingles",
    description: "Aprenderas el nivél basico e intermedio del idioma",
    instructor: "Patricia Machado",
  },
  {
    title: "Curso de Programacion Web",
    description: "Aprenderas los fundamentos de la programacion",
    instructor: "Ian Rosas",
  },
  {
    title: "Curso de Meditacion",
    description: "Aprenderas ejercicios de respiracion consciente",
    instructor: "John Smith",
  },
];

const videos = [
  {
    title: "Ingles 1",
    url: "http://cursodeingles.com/1",
    courseId: "1",
  },
  {
    title: "Ingles 2",
    url: "http://cursodeingles.com/2",
    courseId: "1",
  },
  {
    title: "Programacion 1",
    url: "http://cursodeprogramacion.com/1",
    courseId: "2",
  },
  {
    title: "Programacion 2",
    url: "http://cursodeprogramacion.com/2",
    courseId: "2",
  },
  {
    title: "Meditando 1",
    url: "http://cursodemeditacion.com/1",
    courseId: "3",
  },
  {
    title: "Meditando 2",
    url: "http://cursodemeditacion.com/2",
    courseId: "3",
  },
];

const categories = [
  {
    name: "idiomas",
    courseId: "1",
  },
  {
    name: "tech",
    courseId: "2",
  },
  {
    name: "desarrollo personal",
    courseId: "3",
  },
];

//sincronizando y sembrando la carga de datos
db.sync({ force: false })
  .then(() => {
    console.log("Iniciando la plantación de Información");

    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 100);

    setTimeout(() => {
      usersCourses.forEach((uc) => UsersCourses.create(uc));
    }, 200);

    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 300);

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 400);

    setTimeout(() => {
      console.log("El sembrado ha sido exitoso. =)");
    }, 3000);
  })
  .catch((error) => console.log(error));
