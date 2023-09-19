const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
    const data = req.body;
    const user_id = `${data.full_name}_${data.dob}`;
    const is_success = true; // Set this based on your logic

    const response_data = {
        status: "Success",
        user_id: user_id,
        college_email_id: data.college_email_id,
        college_roll_number: data.college_roll_number,
        numbers_array: data.numbers_array,
        alphabets_array: data.alphabets_array,
        highest_alphabet: Math.max(...data.alphabets_array.map(letter => letter.charCodeAt(0)), 0)
    };

    res.json(response_data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});