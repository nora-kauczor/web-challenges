import { getRandomColor } from "../../utils/randomColor.js";
function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
}
const pentagonElement = Pentagon();
root.append(pentagonElement);
export { Pentagon, pentagonElement };
