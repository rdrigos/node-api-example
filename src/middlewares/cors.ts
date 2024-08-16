import cors from 'cors';

export default cors({
  origin: ['*'],
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
