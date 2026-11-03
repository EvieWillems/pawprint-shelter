interface Species {
    name: string;
    isCute: boolean;
};


function numberAnimals(animal: string, amount: number) {
    const output: string = `We have ${amount} ${animal}s`
    return output
};

let cat: Species = {
    name: 'Cat',
    isCute: true,
};

let moleRat: Species = {
    name: 'Mole rat',
    isCute: false,
};

function isAnimalCute(animal: Species) {
    if (animal.isCute) {
        const output: string = `A ${animal.name} is cute`
        return output
    }
    const output: string = `A ${animal.name} is not cute`
    return output;
};

console.log(isAnimalCute(cat))
console.log(isAnimalCute(moleRat))