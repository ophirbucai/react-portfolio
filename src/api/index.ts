import express from 'express';
const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.set('serverOrigin', 'https://');

app.get('/', (_req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.get('/api/v1', (_req, res) => {
  res.json('{ "test": "hello" }')
})

// Start the Express api
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});