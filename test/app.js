const expect = require('chai').expect;
const request = require('request');


describe('Random', () => {
    it('Random number between 0 and 1023', (done) => {
        request.get('http://localhost:3000/api/random', (err, res, body) => {
            console.log(body)
            expect(JSON.parse(body).number).to.be.within(0, 1023);
            expect('Content-Type', /json/);
            expect(200);
            done();
        });
    });
});

describe('Vowels', () => {
    it('Counts the amount of vowels in word', (done) => {
        var word = 'aeiouyåäö'
        request.post('http://localhost:3000/api/count_vowels/countmyvowels' + word, (err, res, body) => {
            expect(JSON.parse(body).amountOfVowels).to.equal(9);
            expect('Content-Type', /json/);
            expect(200);
            done();
        });
    });
});

describe('Number', () => {
    it('Calls a random number', (done) => {
        request.get('http://localhost:3000/api/counter/:num', (err, res, body) => {
            expect(JSON.parse(body).currentAmount).to.be.a('number');
            expect('Content-Type', /json/);
            expect(200);
            done();
        });
    });
});

describe('Add', () => {
    it('Added 1 to counter', (done) => {
        request.get('http://localhost:3000/api/counter/add', (err, res, body) => {
            expect(JSON.parse(body).message).to.equal('added 1 to counter');
            expect('Content-Type', /json/);
            expect(200);
            done();
        });
    });
});