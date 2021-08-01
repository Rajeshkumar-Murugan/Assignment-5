const students = [
  { name: "Adhi", gender: "male" },
  { name: "Ahamed", gender: "male" },
  { name: "Rutika Kadam", gender: "female" },
  { name: "Priyadharsini", gender: "female" },
];

console.log(students.filter((student) => student.gender == 'female'));
console.log(students.filter((name) => name.name[0] == 'A'));

//Unable to get the 
let x=0;
const malecount = students.filter((counts) => {
     counts.gender === 'male'
      x=x+1;
    return x;
});
console.log(malecount)