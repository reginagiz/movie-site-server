import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const URL =
  'mongodb+srv://regina:H0QYOTC6WLzUrfBg@cluster0.fhuwl.mongodb.net/movie_app?retryWrites=true&w=majority';

const PORT = 5000;

const app = express();  
app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '1800');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'PUT, POST, GET, DELETE, PATCH, OPTIONS'
  );
  next();
});
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);
app.use(express.static('public'));
app.use(express.static('static'));

async function startApp() {
  try {
    mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log('Server started on Port ' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
