"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const thomas = await getCharacter("thomasMcelroy.json");

  showCharacter(thomas);
  showCharacter(thomas);
  showCharacter(thomas);
  showCharacter(thomas);
  showCharacter(thomas);
  showCharacter(thomas);
  showCharacter(thomas);
  showCharacter(thomas);
  showCharacter(thomas);
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
          <p>Voice by: ${character.voicedBy}</p>
        </article>
  `;
  document
    .querySelector("#characters")
    .insertAdjacentHTML("beforeend", characterHTML);

  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", showDetails);

  function showDetails() {
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
    document.querySelector("#dialog-haircolor").textContent =
      character.hairColor;
    document.querySelector("#dialog-schoolgrade").textContent =
      character.schoolGrade;
    document.querySelector("#dialog-episodes").textContent = character.episodes;
    document.querySelector("#dialog-appearances").textContent =
      character.appearances;
    document.querySelector("#dialog-firstAppearance").textContent =
      character.firstAppearance;
    document.querySelector("#dialog-img").src = character.image;
    document.querySelector("#dialog-character").showModal();
  }
}

async function getCharacter(url) {
  console.log("Get Character");
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
