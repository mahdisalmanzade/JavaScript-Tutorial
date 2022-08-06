/**
## Objects #6
1. create a car object
2. Add make, model, year, colors (array),
   hybrid(boolean) keys.
3. Add two methods (drive and stop).
4. In the function body setup log with random text.
5. Log make.
6. Log first color.
7. Invoke/Call both Methods.
*/

// Object Declaration/Literal
const car = {
  make: 'Benz',
  model: 'Mercedes',
  color: ['White', 'Black', 'Gray', 'Silver', 'Blue'],
  drive: function () {
    console.log('Fortunately this car can drive!😂');
  },
  stop() {
    console.log('Fortunately this car can stop😁 ');
  },
};

console.log(car.make);
console.log(car.color[0]);
console.log(car.drive(), car.stop());
