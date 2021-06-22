// import
const express = require('express');
const app = express();
const port = 3000;

// listen on port
app.listen(port, () => console.info('Listening on port ${port}'));

var addAmount = 0;

// Create a function that displays random number
function randomNumber(max) {
    let randObj = {
        "number": Math.floor(Math.random() * max)
    };
    return randObj
};

// Function that counts the amount of vowels in a word. Source: https://www.programiz.com/javascript/examples/count-vowels
function countVowel(countallthevowels) {
    let countVowel = {
        "word": countallthevowels,
        "vowels": count = countallthevowels.match(/[aeiouåäö]/gi).length
    };
    return countVowel
};


// Endpoints
app.get('/api/random', (req, res) => {
    return res.send(randomNumber(1024));
});

app.get('/api/count_vowels/:word', (req, res) => {
    return res.send(countVowel(req.params.word));
});

app.get('/api/custom_random/:num', (req, res) => {
    return res.send(randomNumber(req.params.num));
});

app.get('/api/counter/add', (req, res) => {
    addAmount++;
    return res.send({ message: 'added 1 to counter' });
});
