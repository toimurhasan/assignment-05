function getRandomColor() {
  const randomNumber = Math.random() * 10;
  const randomNumberFloor = Math.floor(randomNumber);

  const colors = [
    "violet",
    "yellow",
    "stone",
    "rose",
    "orange",
    "amber",
    "lime",
    "teal",
    "pink",
    "stone",
  ];

  const color = colors[randomNumberFloor];
  return color;
}
