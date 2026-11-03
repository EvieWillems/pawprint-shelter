"use strict";
// import type { ShelterAnimal } from "./task2";
Object.defineProperty(exports, "__esModule", { value: true });
function formatChipReading(reading) {
    if (typeof reading === "string") {
        return "chip number: #".concat(reading, " (hand written)");
    }
    else if (typeof reading === "number") {
        return "chip number: #".concat(reading);
    }
    else {
        return "not yet chipped";
    }
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
var roxy = {
    name: "Roxy",
    species: "dog",
    ageYears: 3,
    surrenderReason: "Anti-social behaviour"
};
var animalArray = [rover, joanna, roxy];
var strayArray = animalArray.filter(isStray);
console.log(strayArray);
for (var _i = 0, strayArray_1 = strayArray; _i < strayArray_1.length; _i++) {
    var record = strayArray_1[_i];
    console.log(record.foundLocation);
}
;
// console.log(describeIntake(rover))
// console.log(describeIntake(joanna))
// console.log(isUrgentStray(rover))
// console.log(isUrgentStray(joanna))
// console.log(isUrgentStray(roxy))
