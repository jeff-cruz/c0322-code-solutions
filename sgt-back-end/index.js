const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
    `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.score = Number(grade.score);

  if (!grade.course) {
    res.status(400).json({ error: 'Course is a required field.' });
    return;
  } else if (!grade.name) {
    res.status(400).json({ error: 'Name is a required field.' });
    return;
  } else if (!grade.score) {
    res.status(400).json({ error: 'Score is a required field.' });
    return;
  } else if (!Number.isInteger(grade.score) || grade.score < 0 || grade.score > 100) {
    res.status(400).json({ error: 'Score must be a positive integer between 0 and 100' });
    return;
  }

  const params = [
    grade.course,
    grade.name,
    grade.score
  ];

  const sql = `
  insert into "grades" ("course", "name", "score")
  values ($1, $2, $3)
  returning *
  `;

  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const grade = req.body;
  grade.score = Number(grade.score);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  } else if (!grade.course) {
    res.status(400).json({ error: 'course is a required field.' });
    return;
  } else if (!grade.name) {
    res.status(400).json({ error: 'name is a required field.' });
    return;
  } else if (!grade.score) {
    res.status(400).json({ error: 'score is a required field.' });
    return;
  } else if (!Number.isInteger(grade.score) || grade.score < 0 || grade.score > 100) {
    res.status(400).json({ error: 'score must be a positive integer' });
    return;
  }

  const params = [
    gradeId,
    grade.course,
    grade.name,
    grade.score
  ];

  const sql = `
  update "grades"
  set "course" = $2,
      "name" = $3,
      "score" = $4
  where "gradeId" = $1
  returning *;
  `;

  db.query(sql, params)
    .then(result => {
      const updatedGrade = result.rows[0];

      if (!updatedGrade) {
        res.status(404).json({ error: 'gradeId does not exist' });
      } else {
        res.status(201).json(updatedGrade);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  }

  const params = [gradeId];
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;

  db.query(sql, params)
    .then(result => {
      const deletedGrade = result.rows[0];

      if (!deletedGrade) {
        res.status(404).json({ error: 'gradeId does not exist' });
      } else {
        res.sendStatus(204);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});
