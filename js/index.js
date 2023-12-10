let saveButton = document.querySelector(`#save`);
let textInput = document.querySelector(`#text`);
let titleInput = document.querySelector(`#title`);
let dateInput = document.querySelector(`#date`);
let notesNode = document.querySelector(`#notes`);
let counter = 0;

saveButton.addEventListener(`click`, function() {
var e = document.getElementById(`classer`);
var value = e.value;
var text = e.options[e.selectedIndex].text;
  counter += 1;
  let card = `<div class="col-md-4">
  <div class="card" id="card${counter}">
      <div class="card-body">
          <h5 class="card-title">${titleInput.value}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${text}</h6>
          <p class="card-text">${textInput.value}</p>
      </div>
      <div class="card-footer text-muted">${dateInput.value}</div>
  </div>`;
  notesNode.innerHTML += card;
  
  let classChange = document.querySelector(`#card${counter}`);

  if (value == 1) {
    classChange.classList.add(`important`);
  } else if (value == 3) {
    classChange.classList.remove(`important`);
    classChange.classList.add(`study`);
  };

  titleInput.value = ``;
  textInput.value = ``;
  dateInput.value = ``;
});
