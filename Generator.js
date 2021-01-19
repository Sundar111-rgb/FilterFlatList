function* foo(index) {
  while (index < 12) {
    yield index;
    index++;
  }
}

const iterator = foo(9);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


function* countAppleSales () {
  let saleList = [3, 7, 5, 9]
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i]
  }
}

let appleStore = countAppleSales();  
console.log(appleStore.next());      
console.log(appleStore.next());      
console.log(appleStore.next());     
console.log(appleStore.next());      

function *sayHiGenerator() {
  yield 'Hello'
  yield 'Hey'
  return 'Sundar'
}

const hhh = sayHiGenerator()

console.log(hhh.next());
console.log(hhh.next());
console.log(hhh.next());
