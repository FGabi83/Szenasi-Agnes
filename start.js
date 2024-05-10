// Start our app!
const app = require('./app');
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${PORT}`);
});
