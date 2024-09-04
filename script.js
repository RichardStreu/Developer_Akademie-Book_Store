// get and set data from / to local storage
function getDataFromLocalStorage() {
  let dataFromStorage = JSON.parse(localStorage.getItem("books"));
  if (dataFromStorage != null) {
    books = dataFromStorage;
  }
}

function setDataToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

// render templates

function renderBookContainerTemplate() {

}

function renderDividerTemplate() {

}

function renderBookComments() {
  
}

// initial 

function initialRendering() {
  getDataFromLocalStorage();

}
