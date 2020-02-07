const Upload = require('../models/Upload');

class UploadController {
  async index(req, res) {
    const uploads = await Upload.find();

    return res.json(uploads);
  }

  async store(req, res) {
    const { originalname: name, size, key, location: url = '' } = req.file;

    const upload = await Upload.create({
      name,
      size,
      key,
      url,
    });

    return res.json(upload);
  }

  async delete(req, res) {
    const upload = await Upload.findById(req.params.id);

    await upload.remove();

    return res.send();
  }
}

module.exports = new UploadController();
