const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tabledata = [
    {
        name: 'name',
        email: 'email',
        phoneNumber: 'phone number',
        id: 'id',
    },
];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));

app.get('/api/tabledata', (req, res) => res.json(tabledata));

app.get('/api/tabledata/:tabledata', (req, res) => {
    const chosen = req.params.character;

    console.log(chosen);

    /* Check each character routeName and see if the same as "chosen"
     If the statement is true, send the character back as JSON,
     otherwise tell the user no character was found */

    for (let i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

app.post('/api/tabledata', (req, res) => {
    const newTableData = req.body;

    console.log(newTableData);

    tabledata.push(newTableData);
    res.json(newTableData);
});



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

