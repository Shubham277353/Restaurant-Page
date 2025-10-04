import "./menu.css";

export function loadMenu() {
  const content = document.querySelector("#content");

  const containerDiv = document.createElement("div");
  containerDiv.id = "container-div";

  const heading = document.createElement("h1");
  heading.textContent = "Menu";


  containerDiv.append(heading);
  content.append(containerDiv);
}
