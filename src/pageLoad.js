import image from "https://suzannewandersdelhi.com/wp-content/uploads/2024/05/Untitled-design-2024-05-09T072054.676.jpg";
export default function pageLoads(){
    const content = document.querySelector("#content");

    const heading = document.createElement("h2");
     heading.textContent = "Good vibes, great bites.";

    const images = document.createElement("img");
    images.src = image;
    images.alt = "a fancy restaurant";

    const description = document.createElement("p");
    description.textContent = "Rest-o-Rant isn’t just a restaurant – it’s an experience. Serving up mouthwatering dishes with bold flavors, we bring you comfort food with a twist. Whether you’re here to relax, rant with friends, or just indulge, Rest-o-Rant is the perfect spot for good vibes and even better food.";

    content.append(heading);
    content.append(images);
    content.append(description);
}