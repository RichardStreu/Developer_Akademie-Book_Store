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

function renderBookContainerTemplate(index) {
  let bookBox;
  return getBookContainerTemplate(index);
}

function renderBookComments(currentBookIndex) {
  let bookCommentBox = "";
  for (let commentIndex = 0; commentIndex < books[currentBookIndex].comments.   length; commentIndex++) {
    let commentAutor = books[currentBookIndex].comments[commentIndex].name;
    bookCommentBox += getBookCommentsTemplate(commentAutor); 
  }
  return bookCommentBox;
}

function renderDividerTemplate() {
  getDividerTemplate();
}

// initial

function initialRendering() {

  getDataFromLocalStorage();

  let bookWrapperRef = document.getElementById("bookWrapper");
  for (let index = 0; index < books.length; index++) {
    
    bookWrapperRef.innerHTML += renderBookContainerTemplate(index);
    bookWrapperRef.innerHTML += renderBookComments(index);
    bookWrapperRef.innerHTML += getDividerTemplate();

  }
}

initialRendering();