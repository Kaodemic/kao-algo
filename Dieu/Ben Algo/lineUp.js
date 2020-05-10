let lineA = [];
let lineB = [];
let lineC = [];

let solvedOrderly = [];

function solved(){
    solvedOrderly.length > 0 && console.log(solvedOrderly.shift() + "is Done!")
}

function documentToSolve(){
    if(lineA.length > 0){
        const currentPerson = lineA.shift();
        console.log(`officer A passed documents ${currentPerson} to data:`);
        solvedOrderly.unshift(currentPerson);
    }
    if(lineB.length>0){
        const currentPerson = lineB.shift();
        console.log(`officer B passed documents ${currentPerson} to data:`);
        solvedOrderly.unshift(currentPerson);
    }
    if(lineC.length>0){
        const currentPerson = lineC.shift();
        console.log(`officer C passed documents ${currentPerson} to data:`);
        solvedOrderly.unshift(currentPerson);
    }
}
function randomUser(num){
    let randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}

const peopleLiningUp = (...people) => {
    people.forEach(person => {
        console.log(person);
        let getRandom = randomUser(4);
        switch(getRandom){
            case 0:
            case 1:
                lineA.push(person);
                console.log(person + ' is standing in lineA');
                break;
            case 2:
                lineB.push(person);
                console.log(person + ' is standing in lineB');
                break;
            case 3:
                lineC.push(person);
                console.log(person + ' is standing in lineC');
                break;
            default:
                break;
        }
    })
}

const customDeclaration = () => {
    setInterval(()=> documentToSolve(), 2000);
}

const customManager = () => {
    setInterval(()=> solved(), 3000);
}

peopleLiningUp(1,6,9);
customDeclaration();
customManager();