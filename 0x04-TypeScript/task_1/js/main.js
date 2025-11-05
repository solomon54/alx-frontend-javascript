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
function printTeacher({ firstName, lastName, }) {
    firstName = firstName.charAt(0).toUpperCase();
    return `${firstName}. ${lastName}`;
}
console.log(printTeacher("Solomon", "Tsehay"));
export {};
//# sourceMappingURL=main.js.map