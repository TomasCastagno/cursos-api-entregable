const Videos = require("../models/videos.models");

class VideoService {
  //servicio para crear video
  static async create(newVideo) {
    try {
      const result = await Videos.create(newVideo);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //servicio para eliminar video
  static async delete(id) {
    try {
      const result = await Videos.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideoService;
