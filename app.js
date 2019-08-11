// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();
const app = document.getElementById("root");
const logo = document.createElement("img");
const container = document.createElement("div");

logo.src = "logo.png";
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // create a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      // Create a p and set text content to the film's
      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      card.appendChild(p);

      console.log(movie.title);
      console.log(movie.description);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
    console.log("error");
  }
};

// Send request
request.send();
