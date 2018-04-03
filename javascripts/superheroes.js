console.log("superheroes.");
const printToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

const buildDomString = (myDataArray) => {
  let myString = '';
  myDataArray.forEach(element => {
    myString += `<div class="col-md-3">`;
    myString +=   `<div class="panel">`;
    myString +=     `<div class="panel-heading">`;
    myString +=     `<h3 class="panel-title">${element.name}</h3>`;
    myString +=     `</div>`;
    myString +=     `<div class="panel-body">`;
    let myGender = element.gender;
    if(myGender.toLowerCase() === 'male'){
      myString +=       `<img src='${element.image}' class='charImage male'>`;
    }else{
      myString +=       `<img src='${element.image}' class='charImage female'>`;
    };
    myString +=       `<p class='charDesc'>${element.description}</p>`;
    myString +=     `</div>`;
    myString +=   `</div>`;
    myString += `</div>`;
    //myString += 
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