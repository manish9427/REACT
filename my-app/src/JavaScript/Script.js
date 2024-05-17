const arr = [
    {first_name:"Manish",last_name:"Verma",age:23},{first_name:"Neeraj",last_name:"Verma",age:24}
]

const ageFinder = arr.filter(arr => arr.age>24)
const nameFinder = arr.filter(arr => arr.first_name=="Manish")


console.log(ageFinder);
console.log(nameFinder);
