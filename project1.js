let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"this is quote number 1"`,
        person: `Nobody`
    },
    {
        quote: `"this is quote number 2 right here"`,
        person: `Somebody`
    },
    {
        quote: `"this is quote another quote said by someone"`,
        person: `hello world`
    },
    {
        quote: `"this is quote the last of the quotes"`,
        person: `CSE`
    },
];


btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length); //Math.random returns values between 0 to 1(including 0, excluding 1)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});