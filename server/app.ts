import express from 'express';
import path from 'path';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

app.set('port', process.env.PORT || 3000);

app.use(
  express.static(path.join(__dirname, '..', 'dist', 'raffle'), {maxAge: 31557600000})
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'raffle', 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
});
