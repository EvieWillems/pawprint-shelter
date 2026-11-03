;
function numberAnimals(animal, amount) {
    const output = `We have ${amount} ${animal}s`;
    return output;
}
;
let cat = {
    name: 'Cat',
    isCute: true,
};
let moleRat = {
    name: 'Mole rat',
    isCute: false,
};
function isAnimalCute(animal) {
    if (animal.isCute) {
        const output = `A ${animal.name} is cute`;
        return output;
    }
    const output = `A ${animal.name} is not cute`;
    return output;
}
;
console.log(isAnimalCute(cat));
console.log(isAnimalCute(moleRat));
