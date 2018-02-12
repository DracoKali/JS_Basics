// Check if there are nagatives in array
function zero_negativity(arr){
    for(i = 0; i <= arr.length-1; i++){
        if(arr[i] >= 0){
            return true;
        }else{
            return false;
        }
    }
}
console.log(zero_negativity([0, 2, 3, 4, 5]));

// Check if number is even
function is_even(q){
    if(q % 2 == 0){
        console.log("true");
    }else{
        console.log("false");
    }
}
is_even(10);

// Check if number is odd
function is_odd(b) {
    if (b % 2 == 1) {
        console.log("true");
    } else {
        console.log("false");
    }
}
is_odd(3);

// Check how many even numbers in array
function how_many_even(r){
    var count = 0;
    for (l = 0;  l <= r.length-1; l++){
        if (r[l] >= 0){
            count++;
        }
    }
    console.log("There are " + count + " positive numbers in the array." );
}
how_many_even([3,-12, 17, -15, -8, 47]);

// Random number array
function create_dummy_array(n){
    return Math.floor(Math.random(n) * 10);
}
var randoms = Array(5).fill(0).map(create_dummy_array);
console.log(randoms);

// Random element from array
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

