const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/golden-retriever-puppy.jpeg") {
    myImage.setAttribute("src", "images/golden-retriever-puppy2.jpg");
  } else {
    myImage.setAttribute("src", "images/golden-retriever-puppy.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `金毛 is cool, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `金毛 is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
