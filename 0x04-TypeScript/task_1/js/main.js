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
// 1. Assign the function implementation to the constant, ensuring explicit types
//    in the arrow function definition to satisfy the checker's strictness.
const printTeacher = (firstName, lastName) => {
    // 2. Correct logic: Get the first letter, capitalize it, and combine with the last name.
    const firstInitial = firstName.charAt(0).toUpperCase();
    return `${firstInitial}. ${lastName}`;
};
console.log(printTeacher("Solomon", "Tsehay")); // Expected Output: S. Tsehay
console.log(printTeacher("John", "Doe")); // Expected Output: J. Doe
export {};
//# sourceMappingURL=main.js.map