import express from 'express';
import CacheFactory from './cachefactory/cacheFactory';
import { ErrorHandler } from './errorHandler';

const app = express();
app.use(express.json());
const cacheRouter = express.Router();

const cacheFactory = new CacheFactory<number, string>();
const myCache = cacheFactory.defaultCache(5);

cacheRouter.put('/value', async (req, res, next) => {
  try {
    console.log('adding key value pair here');
    myCache.put(req.body.key, req.body.value);
    return res.status(200).send({
      message: 'success'
    });
  } catch (error) {
    next(error);
  }
});

cacheRouter.get('/value', async (req, res, next) => {
  try {
    console.log('getting key value pair here');
    const val = myCache.get(parseInt(req.query.key.toString()));
    return res.status(200).send({
      value: val,
      message: 'success'
    });
  } catch (error) {
    next(error);
  }
});

app.use('/cache-service', cacheRouter);

app.use(ErrorHandler);

app.listen(3000, () => {
  console.log('server started...');
});
