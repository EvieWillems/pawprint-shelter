import type { ShelterAnimal } from "./task2";

interface Microchipped {
    chipNumber: string;
}


// interface ShelterAnimal {
//     name: string;
//     species: "dog"|"cat"|"rabbit"|"guinea pig";
//     ageYears: number;
//     weightKg: number;
// }

interface StrayIntake {
  name: string;
  species: "dog" | "cat" | "rabbit" | "guinea-pig";
  ageYears: number;
  foundLocation: string;
  notes?: string;
}

interface SurrenderIntake {
  name: string;
  species: "dog" | "cat" | "rabbit" | "guinea-pig";
  ageYears: number;
  surrenderReason: string;
  notes?: string;
}

type IntakeRecord = StrayIntake | SurrenderIntake;

type TraceableAnimal = ShelterAnimal & Microchipped;

type IntakePriority = 1 | 2 |3;


function formatChipReading(reading: number|string) {
    if (typeof reading === "string") {
        return `chip number: #${reading} (hand written)`;
    }
    return `chip number: #${reading}`;
};

const chipAnimal: TraceableAnimal = {name: "Chippy", species: "guinea pig", ageYears: 1, weightKg: 0.5, chipNumber: "1234abc"};

console.log(formatChipReading(chipAnimal.chipNumber));

function describeIntake(intakeRecord: IntakeRecord) {
    if ("surrenderReason" in intakeRecord) {return `${intakeRecord.name} was surrendered because: ${intakeRecord.surrenderReason}`};
    return `${intakeRecord.name} was found at: ${intakeRecord.foundLocation}`;
}

let rover: StrayIntake = {
  name: "Rover",
  species: "dog",
  ageYears: 2,
  foundLocation: "Glasgow",
  notes: "Is a good boy"
}

let joanna: SurrenderIntake = {
  name: "Joanna",
  species: "guinea-pig",
  ageYears: 7,
  surrenderReason: "Anti-social behaviour"
}

console.log(describeIntake(rover))

console.log(describeIntake(joanna))