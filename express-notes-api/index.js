const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
const notes = data.notes;
app.use(express.json());

app.listen(3000, () => {
  // console.log('Listening on port 3000.');
});

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const id in notes) {
    array.push(notes[id]);
  }
  res.json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number(id) || Number(id) < 1) {
    res.status(400).json({ error: 'id must be positive integer' });
  } else if (notes[id]) {
    res.status(200).json(notes[id]);
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  }
});

app.post('/api/notes', (req, res) => {
  const entry = req.body;
  if (!entry.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const newNote = {
      id: data.nextId,
      content: entry.content
    };
    notes[data.nextId] = newNote;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number(id) || Number(id) < 1) {
    res.status(400).json({ error: 'id must be positive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  } else {
    delete notes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const entry = req.body;
  const content = entry.content;
  if (!Number(id) || Number(id) < 1) {
    res.status(400).json({ error: 'id must be positive integer' });
  } else if (!entry.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!notes[id]) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  } else {
    const edit = { id, content };
    notes[id] = edit;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(edit);
      }
    });
  }
});
