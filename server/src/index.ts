import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';
import { router } from './router';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});