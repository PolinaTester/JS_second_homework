function arrayToWord(charArray) {
    return charArray.join('');
}

let chars = ['H', 'e', 'l', 'l', 'o'];
console.log(arrayToWord(chars)); 




function greetUser(user) {
    console.log(`Привет, ${user.username}, вам ${user.age} лет!`);
}


let userData = {
    username: 'Петр',
    age: 20
};

greetUser(userData); 
