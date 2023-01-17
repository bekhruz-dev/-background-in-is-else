const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
button.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      console.log("good");
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else {
      console.log(404);
    }
  });
});
