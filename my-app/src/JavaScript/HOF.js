// forEach
// map
// filter
// reduce
// splice
// slice

const person = [
    {name: 'manish', age:23},
    {name:'ram', age:30},
    {name:'neeraj',age:18},
    {name:'manoj', age:23},
    {name:'ajay', age:20}
]

person.forEach((person,index,arr)=>{console.log(person.name)})

const mapAns =person.map((person)=>person.name);
console.log(mapAns);

const adult = person.filter((person)=>person.age>=23);
console.log(adult);

const totalAge = person.reduce((sum,person)=>sum+person.age,0);
console.log(totalAge);

const  removePerson = person.splice(1,1);
console.log(removePerson);
console.log(person);

const SliceRemove = person.slice(0,2);
console.log(SliceRemove);
