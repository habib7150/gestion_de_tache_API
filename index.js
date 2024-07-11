const express = require('express');
const userRoutes = require('./routes/UserRoutes');
const commentRoutes = require('./routes/CommentRoutes');
const taskRoutes = require('./routes/TaskRoutes');
const collaborationRoutes = require('./routes/CollaborationRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/hello', (request, result) => {
    result.send('Hello from the API!');
})

app.use('/users', userRoutes);
app.use('/comments', commentRoutes);
app.use('/tasks', taskRoutes);