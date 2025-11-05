export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperiance?: number;
  yearsOfExperience?: number;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "Solomon",
  lastName: "Tsehay",
  fullTimeEmployee: false,
  location: "Ethiopia",
  contract: "6 months",
};
console.log(teacher1);

interface Director extends Teacher {
  numberOfReports: number;
}
const director1: Director = {
  firstName: "Mola",
  lastName: "Arega",
  fullTimeEmployee: true,
  location: "Bahir Dar",
  numberOfReports: 5,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 1. Assign the function implementation to the constant, ensuring explicit types
//    in the arrow function definition to satisfy the checker's strictness.
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  // 2. Correct logic: Get the first letter, capitalize it, and combine with the last name.
  const firstInitial = firstName.charAt(0).toUpperCase();

  return `${firstInitial}. ${lastName}`;
};

console.log(printTeacher("Solomon", "Tsehay")); // Expected Output: S. Tsehay
console.log(printTeacher("John", "Doe")); // Expected Output: J. Doe
