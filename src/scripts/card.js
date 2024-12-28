const createTag = (props) => {
  let tag = document.createElement("li");
  tag.textContent = props.tagName;
  tag.classList.add("card__tag", props.tagClass);
  return tag;
};

const createTags = (propsList) => {
  const tags = [];
  for (let props of propsList) {
    tags.push(createTag(props));
  }
  return tags;
};

export const createCard = (props) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  card.querySelector(".card__heading").textContent = props.title;
  card.querySelector(".card__description").textContent = props.description;
  card.querySelector(".card__tags").append(...createTags(props.tags));
  return card;
};
