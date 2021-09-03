const express = require('express');
require('./Database/connection');
const userRouter = require('./routes/userRouter');
const blogRouter = require('./routes/blogRouter');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs')


app.use('/', userRouter);

app.use('/blog', blogRouter);


app.listen(PORT, () => {
    console.log(`Your server is Running at ${PORT}`);
});