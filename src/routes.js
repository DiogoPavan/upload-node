const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const UploadController = require('./controllers/UploadController');

routes.get('/uploads', UploadController.index);

routes.post(
  '/uploads',
  multer(multerConfig).single('file'),
  UploadController.store
);

routes.delete('/uploads/:id', UploadController.delete);

module.exports = routes;
