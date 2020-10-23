//1-7 loop
let num;

for (num = 1; num <= 7; num = num+1){
    console.log(num);
}

//6-25 by fours

let fours;

for (fours = 6; fours < 26; fours = fours+4){
    console.log(fours);

} 

for (fours; fours = 26; fours = fours){
    console.log(fours);
    break;
} 

//Wizards

const wizards = [ `Harry Potter`, `Hermionie Granger`, `Ron Weasley`];

for (wizards; wizards; wizards = wizards){
    console.log(wizards);
    break;
}
//Harry Potter Movies
console.log(`Harry Potter Movies`);

let harryPotterMovies = 0

while (harryPotterMovies <=8){
    console.log(harryPotterMovies);
    harryPotterMovies++
}

//Yer a wizard, a Web Dev Wizzard

let quote = [`Yer`,`a`,`wizard`,`Harry`];

while (quote = quote){
    console.log(quote);
    break;
}