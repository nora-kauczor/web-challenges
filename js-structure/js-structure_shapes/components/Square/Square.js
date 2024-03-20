import { getRandomColor } from "../../utils/randomColor.js";
function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}
const squareElement = Square();
root.append(squareElement);
export { Square, squareElement };
