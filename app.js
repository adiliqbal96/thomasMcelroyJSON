const charactersDataURL =
  "https://raw.githubusercontent.com/cederdorff/dat-js/main/05-data/southpark.json?fbclid=IwAR3S54uHsp2dJ-XDuYYeGUxBaO-xhoXwz0ONTK-4O0aXJdHxIFkJ666VEIk";

async function initApp() {
  try {
    const characters = await fetchCharactersData(charactersDataURL);
    for (const character of characters) {
      showCharacter(character);
    }

    // Add event listener for sort dropdown
    document.getElementById("sort").addEventListener("change", (e) => {
      const sortedCharacters = sortCharacters(characters, e.target.value);
      displayCharacters(sortedCharacters);
    });
  } catch (error) {
    console.error("Error fetching characters data:", error);
  }
}

async function fetchCharactersData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function displayCharacters(characters) {
  const charactersContainer = document.querySelector("#characters");
  charactersContainer.innerHTML = "";
  for (const character of characters) {
    showCharacter(character);
  }
}

function sortCharacters(characters, sortBy) {
  const sortedCharacters = [...characters];
  sortedCharacters.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });
  return sortedCharacters;
}

function showCharacter(character) {
  console.log("showCharacter");
  const characterHTML = /*html*/ `
          <article class="grid-item">
          <img
            src="${character.image}"
            alt=""
          />
          <h2>${character.name}</h2>
          <p>Ocupation: ${character.occupation}</p>
          <p>Age: ${character.age}</p>
          <p>Voiced by: ${character.voicedBy}</p>
        </article>
  `;
  document
    .querySelector("#characters")
    .insertAdjacentHTML("beforeend", characterHTML);

  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", () => showDetails(character)); // Pass character object to showDetails()
}

function showDetails(character) {
  console.log("Show details");
  console.log(character);
  document.querySelector("#dialog-name").textContent = character.name;
  document.querySelector("#dialog-nickname").textContent = character.nickname;
  document.querySelector("#dialog-ocupation").textContent =
    character.occupation;
  document.querySelector("#dialog-age").textContent = character.age;
  document.querySelector("#dialog-voicedby").textContent = character.voicedBy;
  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-religion").textContent = character.religion;
  document.querySelector("#dialog-catchphrase").textContent =
    character.catchPhrase;
  document.querySelector("#dialog-haircolor").textContent = character.hairColor;
  document.querySelector("#dialog-schoolgrade").textContent =
    character.schoolGrade;
  document.querySelector("#dialog-episodes").textContent = character.episodes;
  document.querySelector("#dialog-appearances").textContent =
    character.appearances;
  document.querySelector("#dialog-firstAppearance").textContent =
    character.firstAppearance;
  document.querySelector("#dialog-img").src = character.image;
  const dialog = document.querySelector("#dialog-character");
  fadeIn(dialog);
  dialog.querySelector(".close").addEventListener("click", () => {
    fadeOut(dialog);
  });
}

function fadeIn(element) {
  element.style.opacity = "0";
  element.style.display = "block";
  setTimeout(() => {
    element.style.transition = "opacity 0.5s";
    element.style.opacity = "1";
  }, 0);
}

function fadeOut(element) {
  element.style.transition = "opacity 0.5s";
  element.style.opacity = "0";
  setTimeout(() => {
    element.style.display = "none";
  }, 500);
}

document.addEventListener("DOMContentLoaded", initApp);
