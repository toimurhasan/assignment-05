const colorChangeElements = document.getElementsByClassName("bg-color-change");

let previousColor = "bg-blue-100";

document.getElementById("theme-btn").addEventListener("click", function () {
  const themeColor = getRandomColor();
  for (let colorChangeElement of colorChangeElements) {
    colorChangeElement.classList.replace(previousColor, `bg-${themeColor}-100`);
  }
  previousColor = `bg-${themeColor}-100`;
});
