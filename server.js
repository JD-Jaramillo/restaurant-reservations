const http = require('http');
const { ppid } = require('node:process');
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

app.get('/tabledata', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

