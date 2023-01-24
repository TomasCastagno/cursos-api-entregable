const express = require("express");
const initModels = require("./models/init.models");
const db = require("./utils/database");
const usersRoutes = require("./routes/users.routes");
const coursesRoutes = require("./routes/courses.routes");
const videosRoutes = require("./routes/videos.routes");
const categoriesRoutes = require("./routes/categories.routes");

const app = express();

app.use(express.json());

const PORT = 8000;

// autenticación de base de datos
db.authenticate()
  .then(() => console.log("Autenticación exitosa."))
  .catch((error) => console.log(error));

// sincronización de base de datos
db.sync({ alter: false })
  .then(() => console.log("Base de datos sincronizada."))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server" });
});

app.use("/api/v1", usersRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1", categoriesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}.`);
});
