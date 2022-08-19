// // Add student role to every student
// const updatedStudents = students.map((student, index, array) => {
//   student.role = 'student';
//   return student;
// });
// // console.log(updatedStudents);

// // Filter students with 80 and higher scores
// const highScores = students.filter((student, index, array) => {
//   // Old-fashioned way using if-statement
//   // if (student.score >= 80) {
//   //   return student;
//   // }
//   // Old way but a bit shorter
//   // if(student.score >= 80) return student;

//   // Ternary Operator
//   // return student.score >= 80 ? student : null;
//   return student.score >= 80;
// });

// // Find a unique value from students array
// const specificId = students.find((student) => {
//   return student.id === 2;
// });

// // console.log(highScores);
// // console.log(specificId);

// const averageScore =
//   students.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue.score;
//   }, 0) / students.length;

// console.log(averageScore);
const students = [
  {
    id: 1,
    name: 'Peter',
    score: 80,
    favoriteSubject: 'Math',
  },
  {
    id: 2,
    name: 'Mahdi',
    score: 99,
    favoriteSubject: 'Web Developement',
  },
  {
    id: 3,
    name: 'Jack',
    score: 85,
    favoriteSubject: 'Math',
  },
  {
    id: 4,
    name: 'John',
    score: 34,
    favoriteSubject: 'History',
  },
  {
    id: 5,
    name: 'Edward',
    score: 74,
    favoriteSubject: 'Art',
  },
];

// export default students;

const survey = students.reduce((survey, student) => {
  /* console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  survey[favSubject] = student.favoriteSubject; */
  const favSubject = student.favoriteSubject;
  console.log(favSubject);
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  console.log(survey);
  return survey;
}, {});

console.log(survey);
