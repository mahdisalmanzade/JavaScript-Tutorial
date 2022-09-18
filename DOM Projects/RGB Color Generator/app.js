const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  let rgbColorFormat = "";
  for (let i = 0; i < 3; i++) {
    if (i == 2) {
      rgbColorFormat += RGBColorGenerator();
      break;
    }
    rgbColorFormat += RGBColorGenerator() + ",";
  }

  rgbColorFormat = `rgb(${rgbColorFormat})`;

  heading.firstElementChild.textContent = rgbColorFormat;
  document.body.style.backgroundColor = rgbColorFormat;

  console.log(rgbColorFormat);
});

const RGBColorGenerator = () => {
  let randomNumberBetween0to255 = Math.floor(Math.random() * 255);

  return randomNumberBetween0to255;
};
