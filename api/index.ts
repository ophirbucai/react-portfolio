import express from "express";
const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.set('serverOrigin', 'https://');

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

// Start the Express api
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});