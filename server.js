const app = require('./lib/app');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
