type IntakePriority = 1 | 2 |3;

let urgent: IntakePriority = 1

// let notNotUrgent: IntakePriority = 4 // doesn't list vaild assignable in error message 

interface Microchipped {
    chipNumber: string|number|undefined;
}




interface ShelterAnimal {
    name: string;
    species: "dog"|"cat"|"rabbit"|"guinea pig";
    ageYears: number;
    weightKg: number;
}

type TraceableAnimal = ShelterAnimal & Microchipped

const chipAnimal: TraceableAnimal = {name: "Chippy", species: "guinea pig", ageYears: 1, weightKg: 0.5, chipNumber: "1234abc"}