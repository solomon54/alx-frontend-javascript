const teacher1 = {
    firstName: "Solomon",
    lastName: "Tsehay",
    fullTimeEmployee: false,
    location: "Ethiopia",
    contract: "6 months",
};
console.log(teacher1);
const director1 = {
    firstName: "Mola",
    lastName: "Arega",
    fullTimeEmployee: true,
    location: "Bahir Dar",
    numberOfReports: 5,
};
console.log(director1);
function printTeacher(firstName, lastName) {
    firstName = firstName.charAt(0);
    return `${firstName}. ${lastName}`;
}
console.log(printTeacher("Solomon", "Tsehay"));
// Class implementation
class StudentClass {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return "Currently working";
    }
    displayName() {
        this.lastName;
        return this.firstName;
    }
}
// Inputs to create an instance of StudentClass
const student1 = new StudentClass("Solomon", "Tsehay");
console.log(student1.displayName()); // Solomon
console.log(student1.workOnHomework()); // Currently working
export {};
//# sourceMappingURL=main.js.map