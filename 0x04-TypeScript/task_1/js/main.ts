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

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: "Mola",
  lastName: "Arega",
  fullTimeEmployee: true,
  location: "Bahir Dar",
  numberOfReports: 5,
};

console.log(director1);
