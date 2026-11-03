"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describeStatus(status) {
    if (status.status === "available") {
        return "Waiting for a forever home";
    }
    else if (status.status === "pending") {
        return "Waiting to be picked up by its brand new owner!";
    }
    else if (status.status === "adopted") {
        return "Gone! Vamoosed! To a new home.";
    }
    else if (status.status === "medical-hold") {
        return "This animal is currently receiving treatment";
    }
    ;
}
;
var availableStatus = { status: "available" };
var pendingStatus = { status: "pending", adopterName: "Bugs McBunny", adoptionDate: "4th July" };
var adoptedStatus = { status: "adopted", adopterName: "Michael Mouse", adoptionDate: "5th November" };
var medicalHoldStatus = { status: "medical-hold", reason: "Feeling peeky" };
console.log(describeStatus(availableStatus));
console.log(describeStatus(pendingStatus));
console.log(describeStatus(adoptedStatus));
console.log(describeStatus(medicalHoldStatus));
// let rover: StrayIntake = {
//   name: "Rover",
//   species: "dog",
//   ageYears: 2,
//   foundLocation: "Glasgow",
//   notes: "Is a good boy"
// }
// let joanna: SurrenderIntake = {
//   name: "Joanna",
//   species: "guinea-pig",
//   ageYears: 7,
//   surrenderReason: "Anti-social behaviour" 
// }
// let roxy: SurrenderIntake = {
//   name: "Roxy",
//   species: "dog",
//   ageYears: 3,
//   surrenderReason: "Anti-social behaviour"
// }
// Then design type CaseStatus as a discriminated union 
// that replaces AnimalCase and makes those combinations 
// impossible to construct. It needs at least four stages: 
// available (no extra fields), pending (needs the prospective 
// adopter's name), adopted (needs the adopter's name and 
// a date), and medical-hold (needs a reason). Write 
// an exhaustive describeCase(status: CaseStatus): 
// string function that returns one sentence per stage, 
// and run it against one example of each stage to confirm 
// the output makes sense.
