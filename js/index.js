//building a random number generator using Javascript

function randomNumberGenerator(max, min){

    var number = Math.floor(Math.random() * (max-min)+min);
    return number;
}

