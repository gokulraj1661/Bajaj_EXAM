const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


const user_id = 'gokulraj';
const email = 'gokulraj1661@gmail.com';
const roll_number = '20BCE2843';

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data || [];
    const numbers = data.filter((item) => typeof item === 'number' || (!isNaN(item) && !isNaN(parseInt(item))));
    const alphabets = data.filter((item) => typeof item === 'string' && item.match(/[A-Za-z]/));

    const highest_alphabet = alphabets.reduce((max, current) =>
      current.localeCompare(max) > 0 ? current : max, ''
    );

    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ is_success: false, error: error.message });
  }
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});