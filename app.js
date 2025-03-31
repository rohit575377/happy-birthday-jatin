import express from 'express'
import fs from 'fs';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  const files = fs.readdirSync('./public/images').sort((a, b) => {
    const numA = parseInt(a.match(/\d+/), 10);
    const numB = parseInt(b.match(/\d+/), 10);
    return numA - numB;
  });
  res.render('index', { files });
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
})