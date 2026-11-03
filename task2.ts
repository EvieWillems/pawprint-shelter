
interface ShelterAnimal {
    name: string;
    species: "dog"|"cat"|"rabbit"|"guinea pig";
    ageYears: number;
    weightKg: number;
}

let mittens: ShelterAnimal = {
    name: "Mittens",
    species: "cat",
    ageYears: 2,
    weightKg: 4
};

let Flora: ShelterAnimal = {
    name: "Flora",
    species: "rabbit",
    ageYears: 2,
    weightKg: 2
};

let Arnie: ShelterAnimal = {
    name: "Arnie",
    species: "cat",     // Where field doesn't belong to specified set, error msg tells us which values are allowed
    ageYears: 2,        // Where field missing, error message notifies which field required
    weightKg: 2         // Where field is wrong type, error msg tells us allowed types
};



// a name,
// a species restricted to exactly dog, cat, rabbit, or guinea pig,
// an age in whole years,
// and a weight in kilograms