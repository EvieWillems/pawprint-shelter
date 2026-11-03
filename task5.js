"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// |{status: "returned"; adopterName: string; reason: string};
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
    else {
        return "Sadly this animal was returned by a pervious adopter";
    }
    ;
}
;
var availableStatus = { status: "available" };
var pendingStatus = { status: "pending", adopterName: "Bugs McBunny", adoptionDate: "4th July" };
var adoptedStatus = { status: "adopted", adopterName: "Michael Mouse", adoptionDate: "5th November" };
var medicalHoldStatus = { status: "medical-hold", reason: "Feeling peeky" };
var returnedStatus = { status: "returned", adopterName: "Defo Duck", reason: "Gambling Problem?" };
console.log(describeStatus(availableStatus));
console.log(describeStatus(pendingStatus));
console.log(describeStatus(adoptedStatus));
console.log(describeStatus(medicalHoldStatus));
console.log(describeStatus(returnedStatus));
