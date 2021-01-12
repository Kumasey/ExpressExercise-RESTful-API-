const express = require('express');
const app = express();
const bodyParser = require('body-parser');
PORT = 3500;

const shopingRoutes = require('./routes');

app.use(bodyParser.json());
app.use(shopingRoutes);

app.get("/", (req, res) => {
    res.json('App has been Launched');
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});