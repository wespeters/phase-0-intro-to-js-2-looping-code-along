const names = [];
const event = [];

function writeCards(names, event){
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return cards
};
// console.log(writeCards(["Charlie", "Duke", "Priscila", "Leonard"], "Father\'s Day"))

function countDown(n) {
    while (n >= 0) {
        console.log(n--);
    }
};
// countDown(10)

