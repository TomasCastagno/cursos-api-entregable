const VideoService = require("../services/video.service");

//controlador para crear videos
const createVideo = async (req, res) => {
  try {
    const newVideo = req.body;
    const result = await VideoService.create(newVideo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//controlador para eliminar videos
const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideoService.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createVideo,
  deleteVideo,
};
