let template = `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Название</h5>
    <h6 class="card-subtitle mb-2 text-muted">Категория</h6>
    <p class="card-text">Содержание</p>
  </div>
  <div class="card-footer text-muted">
    Дата
  </div>
</div>
`;

let saveButton = document.querySelector(`#save`);
let textInput = document.querySelector(`#text`);
let titleInput = document.querySelector(`#title`);
let categoryInput = document.querySelector(`#category`);
let dateInput = document.querySelector(`#date`);
let notesNode = document.querySelector(`#notes`);
let counter = 0;

saveButton.addEventListener(`click`, function() {
  counter += 1;
  let card = `<div class="col-md-4">
  <div class="card" id="card${counter}">
      <div class="card-body">
          <h5 class="card-title">${titleInput.value}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${categoryInput.value}</h6>
          <p class="card-text">${textInput.value}</p>
      </div>
      <div class="card-footer text-muted">${dateInput.value}</div>
  </div>`;
  notesNode.innerHTML += card;
  
  let classChange = document.querySelector(`#card${counter}`);

  if (categoryInput.value == `Важное`) {
    classChange.classList.add(`important`);
  } else if (categoryInput.value == `Учеба`) {
    classChange.classList.add(`study`);
  };

  titleInput.value = ``;
  textInput.value = ``;
  categoryInput.value = ``;
  dateInput.value = ``;
});
