import "@fontsource-variable/jost";
import "../src/components/BadCar.js";
import { cardsData } from "./components/const.js";
const createCardElement = (cardData) => {
  const badCar = document.createElement("bad-car");
  badCar.setAttribute("start", cardData.start);
  badCar.setAttribute("type", cardData.type);

  const title = document.createElement("h1");
  title.textContent = cardData.title;
  title.setAttribute("slot", "title");
  badCar.appendChild(title);

  const image = document.createElement("img");
  image.setAttribute("src", cardData.image);
  image.setAttribute("alt", `Card ${cardData.title}`);
  image.setAttribute("slot", "image");
  badCar.appendChild(image);

  const description = document.createElement("p");
  description.textContent = cardData.description;
  description.setAttribute("slot", "description");

  const textLength = description.textContent.length;
  let fontSize = 16;
  const maxWidth = 300;
  if (textLength > 0) fontSize = Math.min(16 + (maxWidth - textLength * 2) / maxWidth * 10, 16);
  fontSize = Math.min(fontSize, 16);
  if (fontSize < 12) { fontSize = 12; }
  description.style.fontSize = `${fontSize}px`;

  badCar.appendChild(description);

  const attack = document.createElement("p");
  attack.textContent = cardData.attack;
  attack.setAttribute("slot", "attack");
  badCar.appendChild(attack);

  const defense = document.createElement("p");
  defense.textContent = cardData.defense;
  defense.setAttribute("slot", "defense");
  badCar.appendChild(defense);

  return badCar;
};
const container = document.querySelector("body");

cardsData.forEach(cardData => {
  const cardElement = createCardElement(cardData);
  container.appendChild(cardElement);
});
