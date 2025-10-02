export function pageLoads() {
  const content = document.querySelector("#content");

  const containerDiv = document.createElement("div");
  containerDiv.id = "container-div";

  const heading = document.createElement("h2");
  heading.textContent = "Good vibes, great bites.";
  heading.classList.add("text", "heading");

  const description = document.createElement("p");
  description.textContent =
    "Rest-o-Rant isn’t just a restaurant – it’s an experience. Serving up mouthwatering dishes with bold flavors, we bring you comfort food with a twist. Whether you’re here to relax, rant with friends, or just indulge, Rest-o-Rant is the perfect spot for good vibes and even better food.";
  description.classList.add("text", "description");

  content.append(heading);
  content.append(description);
}
