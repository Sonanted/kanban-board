import { cardsData } from "./scripts/cards-data";

const createCard = (props) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  card.querySelector(".card__heading").textContent = props.title;
  card.querySelector(".card__description").textContent = props.description;
  return card;
};

const toDo = document.querySelector(".to-do > .cards");
const inProgress = document.querySelector(".in-progress > .cards");
const testing = document.querySelector(".testing > .cards");
const done = document.querySelector(".done > .cards");

const cards = [];
for (let data of cardsData) {
  cards.push(createCard(data));
}

toDo.append(...cards.slice(0, 3));
inProgress.append(...cards.slice(3, 6));
testing.append(...cards.slice(6, 9));
done.append(...cards.slice(9));
