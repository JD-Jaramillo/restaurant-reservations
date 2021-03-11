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

app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));

app.get('/api/tabledata', (req, res) => res.json(tabledata));

app.post('/api/tabledata', (req, res) => {
    const newTableData = req.body;

    newTableData.routeName = newTableData.name.replace(/\s+/g, '').toLowerCase();
    newTableData.routeEmail = newTableData.email.replace(/\s+/g, '').toLowerCase();
    newTableData.routePhone = newTableData.phoneNumber.replace(/\s+/g, '').toLowerCase();
    newTableData.routeId = newTableData.id.replace(/\s+/g, '').toLowerCase();
    console.log(newTableData);

    tabledata.push(newTableData);
    res.json(newTableData);
});



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

