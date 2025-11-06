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
function printTeacher(firstName: string, lastName: string): string {
  firstName = firstName.charAt(0);
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher("Solomon", "Tsehay"));

// Interface describing the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface describing the class
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    this.lastName;
    return this.firstName;
  }
}

// Inputs to create an instance of StudentClass
const student1 = new StudentClass("Solomon", "Tsehay");
console.log(student1.displayName()); // Solomon
console.log(student1.workOnHomework()); // Currently working
