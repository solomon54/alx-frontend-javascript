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
// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }
// function printTeacher({
//   firstName,
//   lastName,
// }: {
//   firstName: string;
//   lastName: string;
// }): string {
//   firstName = firstName.charAt(0);
//   return `${firstName}. ${lastName}`;
// }
// console.log(printTeacher("Solomon", "Tsehay"));
function printTeacher({ firstName, lastName, }) {
    firstName = firstName.charAt(0);
    return `${firstName}. ${lastName}`;
}
console.log(printTeacher({ firstName: "Solomon", lastName: "Tsehay" }));
export {};
//# sourceMappingURL=main.js.map