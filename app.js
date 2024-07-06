let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyCode = document.querySelector(".copycode");
let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexValue = () => {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
};

const handleButton1 = () => {
  rgb1 = hexValue();
  btn1.innerText = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyCode.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
  rgb2 = hexValue();
  btn2.innerText = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyCode.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText);
  alert("Copied the text: " + copyCode.innerText);
});
