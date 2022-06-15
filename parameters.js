
function mutate(primitiveCopy, objectRef){
	primitiveCopy = 100
	objectRef.x = 100

}


let myNumber = 1
let obj = {x:1}

mutate(myNumber, obj);

console.log(myNumber); // 1
console.log(obj.x); // 100
