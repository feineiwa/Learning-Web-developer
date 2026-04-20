// function one(call_two) {
//     console.log( " Step 1 complete. please call step 2" );
//     call_two();
// };

// function two() {
//     console.log(" step 2 ");
// }

// one(two);

let stocks = {
    fruits: ['apple', 'banana', 'grapes', 'banana', 'strawberry'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};

let order = (Fruit_name, call_production) => {
    setTimeout(()=>console.log(`${stocks.fruits[Fruit_name]}`), 2000)
    call_production();
}

let production = () => {};

order(0, production);{}