export function pageLoads(){
    const content = document.querySelector("#content");

    const heading = document.createElement("h2");
     heading.textContent = "Good vibes, great bites.";
     heading.classList = ""

    // const image1 = document.createElement("img");
    // image1.src = "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2021/07/08/c757d24db5884454ad98ce963383355e_Alain-Ducasse-Macau.jpg";
    // image1.alt = "a fancy restaurant";

    // const image2 = document.createElement("img");
    // image2.src = "https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.jpg?s=612x612&w=0&k=20&c=QbFk2SfDb-7oK5Wo9dKmzFGNoi-h8HVEdOYWZbIjffo=";
    // image2.alt = "TASTY looking food ";

    const description = document.createElement("p");
    description.textContent = "Rest-o-Rant isn’t just a restaurant – it’s an experience. Serving up mouthwatering dishes with bold flavors, we bring you comfort food with a twist. Whether you’re here to relax, rant with friends, or just indulge, Rest-o-Rant is the perfect spot for good vibes and even better food.";

    content.append(heading);
    // content.append(image1);
    // content.append(image2);
    content.append(description);
}