const personalData = {
    name: "ange",
    lastName:"nagema",
    age: 31,
    height: "1.60",
    areYouDeveloper: true
}

const myAge = personalData.age;
console.log(myAge);

const theList = [personalData, {
    name: "lala",
    lastName:"lele",
    age: 32,
    height: "1.50",
    areYouDeveloper: true
}, {
    name: "jaja",
    lastName:"jeje",
    age: 31,
    height: "1.60",
    areYouDeveloper: false
} ]

const theNewList = theList.sort((a, b) => b.age - a.age);
console.log(theNewList)