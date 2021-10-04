import express from 'express';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(
  express.static(path.join(__dirname, '..', 'dist', 'raffle'), {maxAge: 31557600000})
);

app.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
});
