const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  let randomHex = generateRandomHexColor();
  console.log(`Generated Random Color is ${randomHex}`);
  document.body.style.backgroundColor = randomHex;
  color.innerHTML = randomHex;
});

/**
 Hex color codes start with a pound sign or hashtag (#) 
 and are followed by six letters and/or numbers. 
 The first two letters/numbers refer to red, 
 the next two refer to green, and the last two refer to blue. 
 The color values are defined in values between 
 00 and FF (instead of from 0 to 255 in RGB).
 */

// Generating Random Hex Color
function generateRandomHexColor() {
  let hexColor = '#';
  // i <= 5 or i < 6 both are correct
  for (let i = 0; i <= 5; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }

  return hexColor;
}

console.log(generateRandomHexColor());
