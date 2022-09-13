/** Set is a collection of unique values in JavaScript and any programming language 
 ## Each value can only occur one in a Set.
*/

const arrays = ['a', 'a', 'b', 'd', 'd', 'c'];

// const uniqueValues = [...new Set(arrays)];
// console.log(uniqueValues);

// How to create a Set Data Structure in JavaScript
const setDS = new Set();
setDS.add(1);
setDS.add(2);
setDS.add(2);
setDS.add(3);
console.log(setDS);

// values() method returns new Iterator object containing all the values in a Set
for (const value of setDS) {
  console.log(value);
}

const setOfPersons = new Set();
const o = { name: 'Mahdi' };
const p = o;
p.name = 'Ali';
setOfPersons.add(o);
setOfPersons.add(p);
console.log(setOfPersons);

const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3, 4]);
// Symmetric Difference
function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

console.log([...symmetricDifference(set1, set2)]);
