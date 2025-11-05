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
// Function implementing the interface
function printTeacher(firstName, lastName) {
    return `${firstName.charAt(0)}. ${lastName}`;
}
console.log(printTeacher("Solomon", "Tsehay"));
export {};
//# sourceMappingURL=main.js.map