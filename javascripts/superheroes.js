console.log("superheroes.");
const printToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

const buildDomString = (myDataArray) => {
  let myString = '';
  myDataArray.forEach(element => {
    myString += `<h4>${element.name}</h4>`;
  });
  printToDom(myString, "mySuperhero");
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