const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/todolist')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error(err);
});

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description });
  await task.save();
  res.json(task);
});

app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = await Task.findByIdAndUpdate(id, { title, description }, { new: true });
  res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.sendStatus(204);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
