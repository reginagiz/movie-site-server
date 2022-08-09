import fileService from './fileService.js';

class FileController {
  async upload(req, res) {
    try {
      const fileName = fileService.saveFile(req.files.file);
      res.json(fileName);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new FileController();  