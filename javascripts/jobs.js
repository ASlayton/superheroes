let selectedHero = "";

const printToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

const selectHero = (e) => {
  selectedHero = e.target.dataset.heroId;
  document.getElementById('awesome-button').classList.add('hide');
  genericHeroRequest(loadFileForSingleHero);

};

const addHeroSelectionEventListeners = () => {
  const myHeros = document.getElementsByClassName("imaHero");
  for(let n = 0; n < myHeros.length; n++){
    myHeros[n].addEventListener("click", selectHero);
  };
};

const displaySuperhero = heroes => {
  let domString = "";
  heroes.forEach(hero => {
    if (hero.id === selectedHero) {
      domString += `<div class="row">`;
      domString += `<div class="col-sm-4">`;
      if (hero.gender === "Male") {
        domString += `<img class="charImage maleImage" src="${
          hero.image
        }">`;
      } else {
        domString += `<img class="charImage femaleImage" src="${
          hero.image
        }">`;
      }
      domString += `</div>`;
      domString += `<div class="col-sm-6">`;
      domString += `<h2>Selected Hero: ${hero.name}</h2>`;
      domString +=     `<p class='charDesc'>${hero.description}</p>`;
      domString += `</div>`;
    };
  });
  printToDom(domString, "selected-hero");
};


const buildDomString = (heroes) => {
  let myString = '';
  for(let i =0; i < heroes.length; i++){
    myString += `<li>`;
    myString +=   `<a href ="#" data-hero-id="${heroes[i].id}" class="imaHero">${heroes[i].name}</a>`
    myString += `</li>`;
  };
  printToDom(myString, "awesome-dropdown");
};

function executeThisFunctionAfterFileLoaded(){
  const myData = JSON.parse(this.responseText);
  buildDomString(myData.superheroes);
  addHeroSelectionEventListeners(myData.superheroes);
};

function loadFileForSingleHero(){
  const myData = JSON.parse(this.responseText);
  displaySuperhero(myData.superheroes);
};

function ifItFails(){
  console.log("Mistakes have been made.");
};

const genericHeroRequest = (successFunction) => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", successFunction);
  myRequest.addEventListener("error",ifItFails);
  myRequest.open("GET", "/db/superheroes.json");
  myRequest.send();
};

const startApplication = () => {
  genericHeroRequest(executeThisFunctionAfterFileLoaded)
};
startApplication();