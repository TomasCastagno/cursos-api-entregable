const { Router } = require("express");
const {
  createVideo,
  deleteVideo,
} = require("../controllers/videos.controller");

const router = Router();

//crear videos
router.post("/videos", createVideo);

//eliminar videos
router.delete("/videos/:id", deleteVideo);

module.exports = router;
