const express = require('express');
const rateLimiter = require('express-rate-limit');
const app = express();

app.use(rateLimiter({
    windowMs: 1*60*1000,
    limit: 5
}));

app.get('/user', (req, res) => {
    res.send('your request recived ' + Date() + req.ip);
});


app.listen(2000, () => {
console.log("I am running on 2000");
});