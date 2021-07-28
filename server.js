import app from './lib/app.js';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
