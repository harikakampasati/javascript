let map = new Map()

// add values to your hash map
map.set(10,100);
map.set(10.2, true);
map.set(true, "apple");
console.log(map)

//getting hash map by key
console.log(map.get(10))
console.log(map.get(true))
console.log(map.get(1))
//hash map length
console.log(map.size)

map.set(true, "mango");
console.log(map)

//every key value in array
for(i of map){
    console.log(i[0])
    console.log(i[1])
    console.log(i)
}

// all keys only 
for(i of map.keys()){
    console.log(i)
}
// all values only 
for(i of map.values()){
    console.log(i)
}

// delete a key
map.delete(true)
console.log(map)

// delete all data in map 
map.clear()
console.log(map)
