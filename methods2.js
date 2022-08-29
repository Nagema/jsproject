const shoppingList = ["bread", "milk", "coffee", "eggs", "bacon"];

shoppingList.push("sunflower oil");
console.log(shoppingList);

shoppingList.pop("sunflower oil");
console.log(shoppingList)

const favoriteMovies = [
    {title:"Finding Nemo", director:"Ricky Nierva", releaseDate:"2003-05-03" }, 
    {title:"Soul", director:"Pete Docter, Kemp Powers", releaseDate:"2020-10-11"}, 
    {title:"Lucca", director:"Andrea Warren", releaseDate:"2021-06-13"}
];

const newMovies = favoriteMovies.filter(movie => new Date(movie.releaseDate) > new Date("2010-01-01"))
console.log(newMovies)

const directors = favoriteMovies.map(movie => movie.director)
console.log(directors);

const titles = favoriteMovies.map(movie => movie.title)
console.log(titles);

const newList = titles.concat(directors)
console.log(newList)

const spreadList = [...titles, ...directors]
console.log(spreadList)
