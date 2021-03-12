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

const waitlistData = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/tabledata', (req, res) => res.json(tabledata));
app.get('/api/waitlistData', (req, res) => res.json(waitlistData));

app.get('/api/tabledata/:tabledata', (req, res) => {
    const inputed = req.params.tabledata;
    console.log(inputed);

    for (let i = 0; i < tabledata.length; i++) {
        if (inputed === tabledata[i].routeName) {
            return res.json(tabledata[i]);
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

