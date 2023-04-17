function roll() {
  let number = Math.floor(Math.random() * 6) + 1;
  console.log(number);
  switch (number) {
    case 1:
      document.getElementById("dice").src = "Images/dice-1.png";
      break;
    case 2:
      document.getElementById("dice").src = "Images/dice-2.png";
      break;
    case 3:
      document.getElementById("dice").src = "Images/dice-3.png";
      break;
    case 4:
      document.getElementById("dice").src = "Images/dice-4.png";
      break;
    case 5:
      document.getElementById("dice").src = "Images/dice-5.png";
      break;
    case 6:
      document.getElementById("dice").src = "Images/dice-6.png";
      break;
    default:
      return;
  }
}
