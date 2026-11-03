// import type { ShelterAnimal } from "./task2";
function formatChipReading(reading) {
    if (typeof reading === "string") {
        return `chip number: #${reading} (hand written)`;
    }
    return `chip number: #${reading}`;
}
;
const chipAnimal = { name: "Chippy", species: "guinea pig", ageYears: 1, weightKg: 0.5, chipNumber: "1234abc" };
console.log(formatChipReading(chipAnimal.chipNumber));
function describeIntake(intakeRecord) {
    if ("surrenderReason" in intakeRecord) {
        return `${intakeRecord.name} was surrendered because: ${intakeRecord.surrenderReason}`;
    }
    ;
    return `${intakeRecord.name} was found at: ${intakeRecord.foundLocation}`;
}
function isStray(record) {
    return record.surrenderReason === undefined;
}
;
function isUrgentStray(record) {
    if (isStray(record) && record.species === "dog") {
        return "prioritise";
    }
    return "standard quene";
}
let rover = {
    name: "Rover",
    species: "dog",
    ageYears: 2,
    foundLocation: "Glasgow",
    notes: "Is a good boy"
};
let joanna = {
    name: "Joanna",
    species: "guinea-pig",
    ageYears: 7,
    surrenderReason: "Anti-social behaviour"
};
let roxy = {
    name: "Roxy",
    species: "dog",
    ageYears: 3,
    surrenderReason: "Anti-social behaviour"
};
console.log(describeIntake(rover));
console.log(describeIntake(joanna));
console.log(isUrgentStray(rover));
console.log(isUrgentStray(joanna));
console.log(isUrgentStray(roxy));
