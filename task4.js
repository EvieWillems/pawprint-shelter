"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatChipReading(reading) {
    if (typeof reading === "string") {
        return "chip number: #".concat(reading, " (hand written)");
    }
    return "chip number: #".concat(reading);
}
;
var chipAnimal = { name: "Chippy", species: "guinea pig", ageYears: 1, weightKg: 0.5, chipNumber: "1234abc" };
console.log(formatChipReading(chipAnimal.chipNumber));
function describeIntake(intakeRecord) {
    if ("surrenderReason" in intakeRecord) {
        return "".concat(intakeRecord.name, " was surrendered because: ").concat(intakeRecord.surrenderReason);
    }
    ;
    return "".concat(intakeRecord.name, " was found at: ").concat(intakeRecord.foundLocation);
}
var rover = {
    name: "Rover",
    species: "dog",
    ageYears: 2,
    foundLocation: "Glasgow",
    notes: "Is a good boy"
};
var joanna = {
    name: "Joanna",
    species: "guinea-pig",
    ageYears: 7,
    surrenderReason: "Anti-social behaviour"
};
console.log(describeIntake(rover));
console.log(describeIntake(joanna));
