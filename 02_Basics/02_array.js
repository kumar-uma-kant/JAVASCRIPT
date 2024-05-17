const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);   // yaha pr o/p me array ke andar array print hota hai ..means ki array in js takes any type of data ..jaruri nahi ki hm always string hi ho ,,, yaha pr "dc_heroes" arrays ke sara element ko single element ki tarah treat kregi o/p me

// console.log(marvel_heros[3][1]);


// *++++++++ use of "concat" is to combine +++

const allHeros = marvel_heros.concat(dc_heros)// here "dc_heros" is combined inside "marbel_heroes"
// console.log(allHeros);

// *++++++++ use of "spread operator" is also  to combine the array +++

const all_new_heros = [...marvel_heros, ...dc_heros]// new way of combining

// console.log(all_new_heros);

// *++++++++ use of "flat()" is to combine all the element in a single array [when more array comes inside one array +++

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);  //o/p: comes in single array



// console.log(Array.isArray("Umakant")) // it will show o/p as false means no array
// console.log(Array.from("Umakant"))// it will convert into an array
// console.log(Array.from({name: "Umakant"})) // interesting.. it will provide a empty array...means jb wo array nhi bna payeaga toh always return empty[] array.


// ++++++ to convert multiple variables into an array+++


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// use of .of()