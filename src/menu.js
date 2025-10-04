import "./menu.css";

export function loadMenu() {
  let menu = [];

  const content = document.querySelector("#content");

  const containerDiv = document.createElement("div");
  containerDiv.id = "container-div";

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  containerDiv.append(heading);
  content.append(containerDiv);

  class Food {
    constructor(name, imgUrl, description, price) {
      this.name = name;
      this.imgUrl = imgUrl;
      this.description = description;
      this.price = price;
    }
  }

  function addToMenu(name, description, imgUrl, price) {
    const food = new Food(name, description, imgUrl, price);
    menu.push(food);
  }

  addToMenu(
    "Momos",
    "i am a url",
    "Momos are delicious steamed or fried dumplings, usually filled with vegetables, chicken, or meat, and served with spicy chili sauce.",
    "$1"
  );
  addToMenu(
    "Spring Rolls",
    "i am a url",
    "Spring rolls are crispy, cylindrical snacks filled with vegetables, meat, or noodles, often served with sweet or spicy dipping sauces.",
    "$1"
  );
  addToMenu(
    "Pizza",
    "i am a url",
    "pizza is a savory dish made of a flat, baked dough topped with tomato sauce, cheese, and various ingredients like vegetables, meats, or herbs.",
    "$4"
  );
  addToMenu(
    "Shahi Paneer",
    "i am a url",
    "Shahi Paneer is a rich and creamy North Indian dish made with paneer (Indian cottage cheese) cooked in a spiced tomato and cashew-based gravy, often flavored with cream, saffron, and aromatic spices.",
    "$1"
  );
  addToMenu(
    "French Fries",
    "i am a url",
    "French fries are thinly sliced potatoes that are deep-fried until golden and crispy, often served hot with ketchup or other dipping sauces.",
    "$3"
  );
  addToMenu(
    "Pav Bhaji",
    "i am a url",
    "Pav Bhaji is a popular Indian street food consisting of a spicy, mashed vegetable curry (bhaji) served with soft buttered bread rolls (pav).",
    "$2"
  );

  console.log(menu);

  function displayMenu(menu) {
    menu.array.forEach((food) => {
      const menuCard = document.createElement("div");
      const menucardHeading = document.createElement("h3");
      const menuCardDescription = document.createElement("p");
    });
  }
  menucardHeading.textContent = "MOMOS";
  menuCardDescription.textContent =
    "Momos are delicious steamed or fried dumplings, usually filled with vegetables, chicken, or meat, and served with spicy chili sauce.";

  menuCard.append(menucardHeading, menuCardDescription);
  containerDiv.append(menuCard);
}
