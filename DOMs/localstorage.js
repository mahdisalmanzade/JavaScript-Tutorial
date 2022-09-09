// Web Storage API - Provided by Browser
// Session Storage, Local Storage
// setItem(), getItem(), removeItem(), clear()
/*
## Local Storage and Session Storage are exactly the same
and the difference between the two is that Session Storage only persist
Data between the Sessions in other words while our tab is still open,
However, the Local Storage persist data between opening and closing of 
the browser.
## Both Local Storage and Session Storage store data in object-like form
Both of them store data as key-value pairs.
*/
localStorage.setItem('name', 'Mahdi');
localStorage.setItem('friend', 'No One');
localStorage.setItem('job', 'Developer');
localStorage.setItem('age', '26');
// console.log(localStorage.key(0));
localStorage.removeItem('job'); // remove specific value by key name
// localStorage.clear(); // it's gonna delete the whole localStorage
// sessionStorage.setItem('name', 'Mahdi');
// sessionStorage.clear();

console.log('It does come from localStorage', localStorage.getItem('name'));
// console.log('It does come from sessionStorage', sessionStorage.getItem('name'));

// localStorage.clear();

// let friends = ['Mona', 'Amir', 'Omid'];
// localStorage.setItem('friends', friends); // store as comma separated string not array value
// localStorage.setItem('friends', JSON.stringify(friends)); // Stringify the array and store it in Local Storage

// let convertedToArray = JSON.parse(localStorage.getItem('friends'));
// let finded = convertedToArray.find((friend) => {
//   if (friend == 'Amir') return true;
// });
JSON.stringify();
// console.log(finded);
