const printToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

const buildDomString = (heroes) => {
  let myString = '';
  for(let i =0; i < heroes.length; i++){
    myString += `<li>`;
    myString +=   `<a href ="#">${heroes[i].name}</a>`
    myString += `</li>`;
  };
  printToDom(myString, "awesome-dropdown");
};

function executeThisFunctionAfterFileLoaded(){
  const myData = JSON.parse(this.responseText);
  buildDomString(myData.superheroes);
};

function ifItFails(){
  console.log("Mistakes have been made.");
};

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisFunctionAfterFileLoaded);
  myRequest.addEventListener("error",ifItFails);
  myRequest.open("GET", "/db/superheroes.json");
  myRequest.send();
};
startApplication();