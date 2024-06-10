const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// midaleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running redstore server');
})
app.listen(port, () => {
    console.log(`Running redstore server connect to the port ${port}`)
})