const express = require('express');
require('./Database/connection');
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', userRouter);

app.set('view engine', 'ejs')

app.listen(PORT, () => {
    console.log(`Your server is Running at ${PORT}`);
});