
interface AnimalCase {
  isAvailable: boolean;
  isPending: boolean;
  isAdopted: boolean;
  adopterName?: string;
}


export type CaseStatus =
    |{status: "available"}
    |{status: "pending"; adopterName: string; adoptionDate: string}
    |{status: "adopted"; adopterName: string; adoptionDate: string}
    |{status: "medical-hold"; reason:string};



function describeStatus(status: CaseStatus): string {
    if (status.status === "available") {return `Waiting for a forever home`}
    else if (status.status === "pending") {return `Waiting to be picked up by its brand new owner!`;}
    else if (status.status === "adopted") {return `Gone! Vamoosed! To a new home.`;}
    else {return `This animal is currently receiving treatment`;};
};

let availableStatus: CaseStatus = {status: "available"};
let pendingStatus: CaseStatus = {status: "pending", adopterName: "Bugs McBunny", adoptionDate: "4th July"};
let adoptedStatus: CaseStatus = {status: "adopted", adopterName: "Michael Mouse", adoptionDate: "5th November"};
let medicalHoldStatus: CaseStatus = {status: "medical-hold", reason: "Feeling peeky"};

console.log(describeStatus(availableStatus))
console.log(describeStatus(pendingStatus))
console.log(describeStatus(adoptedStatus))
console.log(describeStatus(medicalHoldStatus))

