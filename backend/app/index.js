const GenerationEngine = require('./generation/engine');
const express = require('express');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');
const cors = require('cors');


const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use(cors({origin: 'http://localhost:5100'}));

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  })
})



engine.start();



module.exports = app;
